import { useNavigate } from "react-router-dom";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockDataHosps";
import Header from "../../components/Header";
import {
  approveHospitalApi,
  getHospitalApi,
  getHospitalsApi,
} from "../../http";
import { useEffect, useState } from "react";

const Hospitals = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [hospitals, setHospitals] = useState([]);

  const fetchHospitals = async () => {
    try {
      const { data } = await getHospitalsApi({ approved: true });
      if (data) {
        const hospitalsWithIds = data.hospitals.map((hospital, index) => ({
          ...hospital,
          id: index + 1, // You can use any unique identifier here
          phone: hospital.contact.phone,
        }));
        setHospitals(hospitalsWithIds);
        console.log(hospitalsWithIds);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleApproval = async (id) => {
    // console.log(id);
    try {
      const { data } = await approveHospitalApi({ approve: false }, id);
      if (data) fetchHospitals();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "Sr No.", flex: 0.5 },
    { field: "_id", headerName: "ID", flex: 1.2 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
    {
      // field: "accessLevel",
      // headerName: "Access Level",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="0 10px"
            display="flex"
            justifyContent="center"
            gap={"20px"}
            borderRadius="4px"
          >
            <Button
              variant="outlined"
              color="error"
              sx={{ fontWeight: "bold" }}
              onClick={() => {
                handleApproval(params.row._id);
              }}
            >
              Disapprove
            </Button>
            {/* <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                  //   handleClose();
                  }}
                >
                  Ban
                </Button> */}
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <Box m="20px">
      <Header title="Approved Hospitals" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={hospitals} columns={columns} />
      </Box>
    </Box>
  );
};

export default Hospitals;
