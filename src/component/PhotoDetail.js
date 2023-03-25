import React, { useState, useEffect } from "react";
import axios from "axios";

function PhotoDetail({ match }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (match) {
      axios
        .get(`/api/photos/${match.params.id}`)
        .then((response) => {
          console.log("Response:", response);
          setPhoto(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [match]);

  console.log("Photo:", photo);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.image_url} alt={photo.title} />
      <p>{photo.description}</p>
    </div>
  );
}

export default PhotoDetail;
