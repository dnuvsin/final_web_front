import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PhotoDetail.css";

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
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{photo.title}</h1>
      <img src={photo.image_url} alt={photo.title} />
      <p>{photo.description}</p>
    </div>
  );
}

export default PhotoDetail;
