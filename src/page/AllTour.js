import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  card: {
    maxWidth: 500,
    "&:hover": {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
  media: {
    height: 300,
  },
}));

function PhotoGallery() {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("/api/photos").then((response) => {
      setPhotos(response.data.slice(0, 10)); // limit to first 10 photos
    });
  }, []);

  return (
    <div className={classes.root}>
      {/* <ResponsiveAppBar/> */}
      <h1>AllTour</h1>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Link
              to={`/ทัวร์ทั้งหมด/${photo.title}`}
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={photo.image_url}
                  title={photo.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {photo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {photo.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PhotoGallery;
