import { useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send credentials to backend API for authentication
      const response = await axios.post("/api/authenticate", {
        email,
        password,
      });

      // Store JWT in local storage
      localStorage.setItem("token", response.data.token);

      // Redirect to main page
      window.location = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
      const token = response.data.token;
      // Save the JWT token in local storage or cookies
    } catch (error) {
      console.error(error);
      // Display error message to user
    }
  };

  return (
    <div>
      {/* <Box marginTop={200}>HI</Box> */}
      <Typography paddingTop={20}>Hiii</Typography>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
