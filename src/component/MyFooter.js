import * as React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "@mui/material";

function MyFooter(props) {
  return (
    <ThemeProvider theme={createTheme()}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        <Link color="inherit" href="https://mui.com/">
          พราวฟ้าทัวร์
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </ThemeProvider>
  );
}

export default MyFooter;
