import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import axios from "axios";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1),
    // justifyContent: "center",
  },
  form1: {
    alignContent: "center",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    justifyContent: "center",
  },
}));

function ContactUs() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to submit the form?")) {
      // The user clicked OK, submit the form
      axios
        .post("/api/contact", {
          name: name,
          phone: phone,
          email: email,
          message: message,
        })
        .then((response) => {
          console.log("Form submitted successfully");
          // Add any additional success logic here
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          // Add any error handling logic here
        });
    } else {
      // The user clicked Cancel, do nothing
      return;
    }
  };
  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={2} md={2} border={2}>
            <img
              src="https://teawkrabi.com/medias/Kayak-koh-hong-4.jpg"
              alt="My Image"
            />
          </Grid>
          <Grid className={classes.form1} item xs={8} md={8}>
            <h1>พราวฟ้าทัวร์</h1>
            <h3>กรอกข้อมูลที่ท่านต้องการติดต่อ</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                id="name"
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <br />
              <TextField
                required
                id="phone"
                label="Phone"
                type="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <br />
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <TextField
                required
                id="message"
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <br />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Grid>
          <Grid item xs={2} md={2} border={2}>
            <Typography>xs</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ContactUs;
