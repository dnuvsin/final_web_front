import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PhotoDetail.css";
import { Box } from "@mui/system";

function PhotoDetail({ match }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/photos/${match.params.id}`)
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [match.params.id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Box height={700} width={700} border={10}>
        <h1>{photo.title}</h1>
        <img src={photo.image_url} alt={photo.title} />
        <p>{photo.description}</p>
      </Box>
    </div>
  );
}

export default PhotoDetail;
