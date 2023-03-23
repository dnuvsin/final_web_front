import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Typography } from "@mui/material";

function TableData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  function handleEdit(id) {
    // handle edit logic
  }

  function handleDelete(id) {
    // handle delete logic
  }

  return (
    <div>
      <Typography mt={50}>HIIIII</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="data table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="center">
                  <Edit onClick={() => handleEdit(row.id)} />
                  <Delete onClick={() => handleDelete(row.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableData;
