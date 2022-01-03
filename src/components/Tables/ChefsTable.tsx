import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

const ChefsTable = ({ chefs }: any) => {
  const navigate = useNavigate();

  const editChef = (id: string) => {
    navigate(`/admin/edit-chef/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Picture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chefs.map((chef: any, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => editChef(chef._id)}
            >
              <TableCell component="th" scope="row">
                {chef.name}
              </TableCell>
              <TableCell align="left">{chef.description}</TableCell>
              <TableCell align="left">{chef.pic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChefsTable;
