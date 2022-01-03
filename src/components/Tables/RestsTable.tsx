import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

const RestsTable = ({ rests }: any) => {
  const navigate = useNavigate();

  const editRest = (id: string) => {
    navigate(`/admin/edit-rest/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Chef</TableCell>
            <TableCell align="left">Picture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rests.map((rest: any, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => editRest(rest._id)}
            >
              <TableCell component="th" scope="row">
                {rest.name}
              </TableCell>
              <TableCell align="left">{rest.chef.name}</TableCell>
              <TableCell align="left">{rest.pic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RestsTable;
