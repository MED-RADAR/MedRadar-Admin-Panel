import { useNavigate } from "react-router-dom";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getUsersApi } from "../../http";

const ApprovedUsers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  // displayName
  // email
  // googleId
  // image
  const columns = [
    { field: "id", headerName: "Sr No.",flex: 0.5},
    { field: "_id", headerName: "ID"  ,flex: 1.2},
    {
      field: "displayName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
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
              color="success"
              sx={{ fontWeight: "bold" }}
              onClick={() => {
                navigate("/view");
              }}
            >
              View
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

 

  const fetchUsers = async () => {
    try {
      const { data } = await getUsersApi({ banned: false });
      if (data) {
        const usersWithIds = data.users.map((user, index) => ({
          ...user,
          id: index + 1, // You can use any unique identifier here
        }));
        setUsers(usersWithIds);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box m="20px">
      <Header title="Users" />
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
        <DataGrid checkboxSelection rows={users} columns={columns} />
      </Box>
    </Box>
  );
};

export default ApprovedUsers;
