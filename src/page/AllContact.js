import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";

export default function AdminContact() {
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "phone", headerName: "Phone", width: 300 },
    { field: "message", headerName: "Message", width: 300 },
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
      setDatas(data.filter((data) => data.id !== id));
      setLoading(false);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5001/contact").then((response) => {
      setDatas(response.data);
    });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", paddingTop: 100 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
