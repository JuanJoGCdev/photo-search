import React, { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {fetchData} from "../apis/unsplash/apiService";
import "./GoogleMaps.scss"; // Asegúrate de importar el archivo CSS

const cantUsers = 2;

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 40.748817,
  lng: -73.985428,
};

const svgToDataURL = (svg) => {
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const usersLocation = await fetchData(`random?count=${cantUsers}&`);
    console.log(usersLocation);
    return usersLocation;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getUsers();
      const transformedUsers = result.map((user) => ({
        ...user,
        lat: user.location.position.latitude,
        lng: user.location.position.longitude,
      }));
      console.log(result);

      setUsers(transformedUsers);
    };

    fetchUsers();
  }, []);

  const getIcon = () => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#AB7E57">
        <path d="M480-360q56 0 101-27.5t71-72.5q-35-29-79-44.5T480-520q-49 0-93 15.5T308-460q26 45 71 72.5T480-360Zm0-200q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0 374q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
      </svg>
    `;

    const dataURL = svgToDataURL(svg);

    return {
      url: dataURL,
      scaledSize: new window.google.maps.Size(60, 60),
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(30, 60),
    };
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  const handleInfoWindowLoad = useCallback((infoWindow) => {
    if (infoWindow) {
      setTimeout(() => {
        const closeButtons = document.querySelectorAll(".gm-ui-hover-effect");
        closeButtons.forEach((button) => (button.style.display = "none"));
      }, 100);
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDjJ91DKtLzYRuaPgHLAAY4FtHqgS6hdVU"
      onLoad={() => setMapLoaded(true)}
    >
      {mapLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
          options={mapOptions}
        >
          {users.map((user, index) => (
            <Marker
              key={index}
              position={{ lat: user.lat, lng: user.lng }}
              icon={getIcon()}
            >
              <InfoWindow
              className="info-window-container"
                position={{ lat: user.lat, lng: user.lng }}
                onLoad={handleInfoWindowLoad}
              >
                <div className="info-window">
                  <img
                    src={
                      user.user.profile_image.large ||
                      "https://c0.klipartz.com/pngpicture/782/114/gratis-png-icono-de-perfil-icono-de-usuario-en-un-circulo-thumbnail.png"
                    }
                    alt={user.alt_description}
                  />
                  <h3>{user.user.name}</h3>
                  <h4>@{user.user.username}</h4>
                </div>
              </InfoWindow>
            </Marker>
          ))}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default MapComponent;
