import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 200,
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
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
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        required
        id="phone"
        label="Phone"
        type="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <TextField
        required
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        required
        id="message"
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactUs;
