// import React from 'react'
// import styles from "./view.module.css";
// import { Box, Button, FormControl, InputLabel, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import { MenuItem } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// //import OrderItems from "./OrderItems";
// const View = () => {
//     function createData(title, value) {
//         return { title, value };
//       }
//       const StocksData = [
//         {
//           id: "1",
//           productId: "sdadasdads",
//           stockId: "dfsdfsdfds",
//           quantity: 10,
//         },
//         {
//           id: "2",
//           productId: "sdadasdads",
//           stockId: "dfsdfsdfds",
//           quantity: 10,
//         },
//       ];

//       const column = [
//         { field: "id", headerName: "ID", flex: 0.5 },
//         { field: "productId", headerName: "Product Id", flex: 2 },
//         { field: "stockId", headerName: "Stock Id", flex: 2 },
//         { field: "quantity", headerName: "Qty", flex: 0.5 },
//         {
//           field: "accessLevel",
//           headerName: "Access Level",
//           flex: 2,
//           renderCell: (params) => {
//             return (
//               <Box
//                 width="60%"
//                 m="0 auto"
//                 p="0 10px"
//                 display="flex"
//                 justifyContent="center"
//                 gap={"20px"}
//                 borderRadius="4px"
//               >
//                 <Button
//                   variant="outlined"
//                   color="success"
//                   sx={{ fontWeight: "bold" }}
//                   onClick={() => {
//                     // navigate(`/products/${params.row.id}`);
//                   }}
//                 >
//                   View
//                 </Button>
//               </Box>
//             );
//           },
//         },
//       ];

//     const rows = [
//         createData('Name Id', '12exiobnnbbo23we212exiobnnbbo23we212exiobnnbbo23we'),
//         createData('User Id', '2exiobnnbbo23we212exiobnnbbo23we212exiobnnbbo23we2'),
//         createData('Transaction Id', '2exiobnnbbo23we212exiobnnbbo23we212exiobnnbbo23wec'),
//         createData('Total Amount', 1590),
//         createData('Status', 'placed'),
//         createData('Reqest Type', 'Approved'),
//         createData('Date', '12-4-2024'),
//       ];
//       const columns = [
//         { field: "id", headerName: "ID", flex: 0.5 },
//         { field: "productId", headerName: "Product Id", flex: 2 },
//         { field: "stockId", headerName: "Stock Id", flex: 2 },
//         { field: "quantity", headerName: "Qty", flex: 0.5 },
//         {
//           field: "accessLevel",
//           headerName: "Access Level",
//           flex: 2,
//           renderCell: (params) => {
//             return (
//               <Box
//                 width="60%"
//                 m="0 auto"
//                 p="0 10px"
//                 display="flex"
//                 justifyContent="center"
//                 gap={"20px"}
//                 borderRadius="4px"
//               >
//                 <Button
//                   variant="outlined"
//                   color="success"
//                   sx={{ fontWeight: "bold" }}
//                   onClick={() => {
//                     // navigate(`/products/${params.row.id}`);
//                   }}
//                 >
//                   View
//                 </Button>
//               </Box>
//             );
//           },
//         },
//       ];
//       const navigate = useNavigate();
//       return (
//         <div className={styles.wrapper}>
//           <div className={styles.left}>
//             <Box
//               display={"flex"}
//               justifyContent={"space-between"}
//               alignItems={"center"}
//             >
//               <Button
//                 variant="contained"
//                 color="success"
//                 sx={{ fontWeight: "bold" }}
//                 onClick={() => {
//                    navigate("/approvedUsers");
//                 }}
//               >
//                 Back
//               </Button>
//               {/* <Box sx={{ minWidth: 120 }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">Status</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     //value={status}
//                     label="Property"
//                     //onChange={(e) => setStatus(e.target.value)}
//                   >
//                     <MenuItem value={"Placed"}>Placed</MenuItem>
//                     <MenuItem value={"Shipped"}>Shipped</MenuItem>
//                     <MenuItem value={"Delivered"}>Delivered</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box> */}
//             </Box>
//             <Box>
//               <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 400 }} aria-label="simple table">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell></TableCell>
//                       <TableCell align="right"></TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {rows.map((row) => (
//                       <TableRow
//                         key={row.name}
//                         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                       >
//                         <TableCell component="th" scope="row">
//                           {row.title}
//                         </TableCell>
//                         {/* <TableCell align="right">{row.title}</TableCell> */}
//                         <TableCell align="left">{row.value}</TableCell>
                    
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Box>
//           </div>
          
//         </div>
//       );
// }

// export default View
// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, withStyles } from "@mui/material";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const View = () => {
//   const rows = [
//     { index: 1, username: 'user1', hospitalName: 'Hospital A', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
//     { index: 2, username: 'user2', hospitalName: 'Hospital B', feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
//     { index: 3, username: 'user3', hospitalName: 'Hospital C', feedback: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { index: 4, username: 'user4', hospitalName: 'Hospital D', feedback: 'Consectetur adipiscing elit.' },
//     { index: 5, username: 'user5', hospitalName: 'Hospital E', feedback: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
//     { index: 6, username: 'user6', hospitalName: 'Hospital F', feedback: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
//   ];

//   return (
//     <TableContainer component={Paper} style={{ maxWidth: '800px', margin: 'auto', marginTop: '20px' }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Index</StyledTableCell>
//             <StyledTableCell>Username</StyledTableCell>
//             <StyledTableCell>Hospital Name</StyledTableCell>
//             <StyledTableCell>Feedback</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.index}>
//               <StyledTableCell>{row.index}</StyledTableCell>
//               <StyledTableCell>{row.username}</StyledTableCell>
//               <StyledTableCell>{row.hospitalName}</StyledTableCell>
//               <StyledTableCell style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{row.feedback}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default View;
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from  "@mui/material";
import './view_styles.css'; // Import the CSS file

const View = () => {
  const rows = [
    { index: 1,  hospitalName: 'Hospital A', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { index: 2,  hospitalName: 'Hospital B', feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    
  ];

  return (
    <TableContainer component={Paper} className="table-container">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell className="cell head-cell">Index</TableCell>
            <TableCell className="cell head-cell">Username</TableCell>
            <TableCell className="cell head-cell">Hospital Name</TableCell>
            <TableCell className="cell head-cell">Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.index}>
              <TableCell className="cell">{row.index}</TableCell>
              <TableCell className="cell">{row.username}</TableCell>
              <TableCell className="cell">{row.hospitalName}</TableCell>
              <TableCell className="cell" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{row.feedback}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default View;