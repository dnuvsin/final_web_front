import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Admin.css";

export default function AdminPage() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          margin="auto"
          padding="auto"
          width={700}
        >
          <Grid className="grid-item" xs={12}>
            <Typography variant="h3" paddingTop={20}>
              Admin Page
            </Typography>
          </Grid>
          <Grid className="grid-item" xs={12}>
            <Link to="/admin/contact">
              <button class="button">รายการติดต่อ</button>
            </Link>
          </Grid>
          <Grid className="grid-item" xs={12}>
            <Link to="/admin/tour">
              <button class="button">รายการทัวร์</button>
            </Link>
          </Grid>
          <Grid className="grid-item" xs={12}>
            <Link to="/admin/allusers">
              <button class="button">ผู้ใช้ทั้งหมด</button>
            </Link>
          </Grid>
          <Grid className="grid-item" xs={12}>
            <Link to="/admin/allreserve">
              <button class="button">รายการจอง</button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
