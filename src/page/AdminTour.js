import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import { color } from "@mui/system";

const DeleteButton = ({ id, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this photo?"
    );
    if (confirmed) {
      setLoading(true);
      axios.delete(`http://localhost:5001/api/photos/${id}`).then(() => {
        onDelete(id);
        setLoading(false);
      });
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleDelete}
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} /> : "Delete"}
    </Button>
  );
};

const EditButton = ({ id, onEdit }) => {
  return (
    <Button variant="contained" color="secondary" onClick={() => onEdit(id)}>
      Edit
    </Button>
  );
};

export default function AdminTour() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "ชื่อทัวร์", width: 300 },
    { field: "description", headerName: "รายละเอียดของทัวร์", width: 300 },
    { field: "image_url", headerName: "รูป", width: 300 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <EditButton id={params.row.id} onEdit={handleEdit} />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <DeleteButton id={params.row.id} onDelete={handleDelete} />
      ),
    },
  ];

  const handleDelete = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  const handleEdit = (id) => {
    // TODO: create edit component and pass row data as props
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5001/api/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        // TODO: display error to user
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", paddingTop: 100 }}>
      <Typography variant="h3">รายการทัวร์</Typography>
      <button style={{ float: "right"}}>Add</button>

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
