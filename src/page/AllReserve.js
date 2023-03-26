import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";
import Typography from "@material-ui/core";

export default function DataTable() {
  const [reserve, setReserve] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: "ID", headerName: "ID", width: 100 },
    { field: "reserve_date", headerName: "reserve_date", width: 300 },
    { field: "date_of_reserve", headerName: "date_of_reserve", width: 300 },
    { field: "user_ID", headerName: "user_ID", width: 300 },
    { field: "tour_id", headerName: "tour_id", width: 300 },
    { field: "quantity", headerName: "จำนวนคน", width: 300 },
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
    if (window.confirm("Are you sure you want to delete this item?")) {
      setLoading(true);
      axios.delete(`http://localhost:5001/reserve/${id}`).then(() => {
        setReserve(reserve.filter((reserve) => reserve.id !== id));
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5001/reserve").then((response) => {
      setReserve(response.data);
    });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", paddingTop: 100 }}>
      <Typography variant="h3">รายการติดต่อ</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <DataGrid
          rows={reserve}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
