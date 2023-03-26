import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: "user_id", headerName: "ID", width: 100 },
    { field: "first_name", headerName: "First name", width: 300 },
    { field: "last_name", headerName: "Last name", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 300,
      valueGetter: (params) =>
        `${params.row.first_name || ""} ${params.row.lastname || ""}`,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const handleDelete = (id) => {
    setLoading(true);
    axios.delete(`http://localhost:5001/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
      setLoading(false);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5001/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", paddingTop: 100 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      )}
    </div>
  );
}
