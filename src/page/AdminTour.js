import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";

export default function AdminTour() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "ชื่อทัวร์", width: 300 },
    { field: "desccription", headerName: "รายละเอียดของทัวร์", width: 300 },
    { field: "image_url", headerName: "รูป", width: 300 },
    {
      field: "edit",
      headerName: "edit",
      width: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleEdit(params.row.id)}
        >
          Edit
        </Button>
      ),
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
    axios.delete(`http://localhost:5001/api/photos/${id}`).then(() => {
      setPhotos(photos.filter((photo) => photo.id !== id));
      setLoading(false);
    });
  };

  const handleEdit = (id) => {};

  useEffect(() => {
    axios.get("http://localhost:5001/api/photos").then((response) => {
      setPhotos(response.data);
    });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", paddingTop: 100 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={photos}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
