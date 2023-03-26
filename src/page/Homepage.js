import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyFooter from "../component/MyFooter";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "โปรแกรมทัวร์ 4 เกาะ ทะเลแหวก เรือหางยาว",
    description:
      "ทัวร์กระบี่วันเดียวเที่ยว 4 เกาะ เที่ยวทะเลแหวก เกาะปอดะ เกาะไก่ ถ้ำพระนาง หาดไร่เลย์",
    imageUrl:
      "https://www.pmandamantour.com/uploads/package/pictures/pic-602139717683.jpg",
  },
  {
    id: 2,
    title: "โปรแกรมทัวร์ สระมรกต น้ำตกร้อน วัดถ้ำเสือ",
    description:
      "เที่ยวเมืองกระบี่ แช่น้ำตกร้อน เล่นน้ำที่สระมรกต แวะวัดถ้ำเสือ",
    imageUrl:
      "https://www.krabiteerapongtour.com/uploads/package/album/pic-361246118608.jpg",
  },
  {
    id: 3,
    title: "ทัวร์พายเรือคายัค อ่าวท่าเลน ครึ่งวัน กระบี่",
    description:
      "ทัวร์กระบี่ พายเรือแคนู/คายัคครึ่งวัน ชมความงามของธรรมชาติ ทะเล ภูเขาหินปูนและป่าชายเลนที่อุดมสมบูรณ์",
    imageUrl:
      "https://www.krabiteerapongtour.com/uploads/package/album/pic-622701866895.jpg",
  },
];

const theme = createTheme();

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "##04BFBF",
            pt: 12,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              พราวฟ้าทัวร์
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              ถ้าคุณอยากเที่ยวทะเลอันดามัน <br />
              นึกถึงกระบี่ นึกถึง
              <br />
              "พราวฟ้าทัวร์"
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href="ทัวร์ทั้งหมด">
                ดูทัวร์ทั้งหมด
              </Button>
              <Button variant="outlined" href="ติดต่อเรา">
                ติดต่อเรา
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cardData.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.imageUrl}
                    alt={card.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={Link}
                      to={`/ทัวร์ทั้งหมด/${card.id}`}
                    >
                      ดูรายละเอียด
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <MyFooter />
    </ThemeProvider>
  );
}
