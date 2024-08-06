import React, { useEffect, useState } from "react";
import "./ProfilePhotos.scss";
import CardMyPhotos from "../components/CardMyPhotos";
import { fetchData } from "../apis/unsplash/apiService";

const ProfilePhotos = ({ infoUser }) => {
  const [photos, setPhotos] = useState([]);
  const [photosUser, setPhotosUser] = useState([]);

  useEffect(() => {
    if (infoUser && infoUser.photos) {
      setPhotos(infoUser.photos);
    }
  }, [infoUser]);



  const getPhoto = async () => {
    try {
      const promises = photos.map(photo => fetchData(`${photo.id}?`));
      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      console.error("Error fetching cover:", error);
      return [];
    }
  };

  useEffect(() => {
    const dataPhoto = async () => {
      const resultData = await getPhoto();
      setPhotosUser(resultData);
    };
    if (photos.length > 0) {
      dataPhoto();
    }
  }, [photos]);

  return (
    <div className="profilePhotosContainer">
      <div>
        <h2>My Photos</h2>
      </div>
      <div className="profilePhotos">
        {photosUser.map((photo, index) => (
          <CardMyPhotos key={index} name={photo.alt_description} img={photo.urls.small}/>
        ))}
      </div>
    </div>
  );
};

export default ProfilePhotos;
