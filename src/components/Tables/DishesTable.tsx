import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

const DishesTable = ({ dishes }: any) => {
  const navigate = useNavigate();

  const editDish = (id: string) => {
    navigate(`/admin/edit-dish/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Text</TableCell>
            <TableCell align="left">Picture</TableCell>
            <TableCell align="left">Icons</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Restaurant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dishes.map((dish: any, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => editDish(dish._id)}
            >
              <TableCell component="th" scope="row">
                {dish.name}
              </TableCell>
              <TableCell align="left">{dish.text}</TableCell>
              <TableCell align="left">{dish.pic}</TableCell>
              <TableCell align="left">{dish.icons}</TableCell>
              <TableCell align="left">{dish.price}</TableCell>
              <TableCell align="left">{dish.restaurant.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DishesTable;
