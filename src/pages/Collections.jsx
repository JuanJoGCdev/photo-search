// src/pages/Collections.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import './Collections.scss';
import useCollections from "../hooks/useCollections";
import { LoaderCard } from "../components/LoaderCard";

const Collections = () => {
  const { collectionName } = useParams(); // Extrae el parámetro de la URL
  const collections = useCollections();

  // Estado para manejar el estado de carga global
  const [loading, setLoading] = useState(true);
  // Estado para manejar la carga de imágenes individuales
  const [imageLoading, setImageLoading] = useState({});

  // Filtra la colección basada en el nombre obtenido de la URL
  const filteredCollection = collections.find(
    (collection) => collection.name.toLowerCase() === collectionName.toLowerCase()
  );

  useEffect(() => {
    if (collections.length > 0) {
      setLoading(false);
    }
  }, [collections]);

  // Maneja el estado de carga de cada imagen
  const handleImageLoad = (id) => {
    setImageLoading((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const handleImageError = (id) => {
    setImageLoading((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  // Inicializa el estado de carga para cada imagen
  useEffect(() => {
    if (filteredCollection) {
      const initialLoadingState = {};
      filteredCollection.contentCollection.forEach((content) => {
        initialLoadingState[content.id] = true;
      });
      setImageLoading(initialLoadingState);
    }
  }, [filteredCollection]);

  if (loading) {
    return <div className="loading">Loading...</div>; // Mensaje de carga global
  }

  if (!filteredCollection) {
    return <div>No collections found for {collectionName}</div>;
  }

  return (
    <div className="collectionsContainer">
      <Header />
      <div className="collectionsBody">
        <MenuBar />
        <div className="collectionsContent">
          <h1 className="collectionsTitle">
            {filteredCollection.name || "Collection"}
          </h1>
          <div className="collectionsImgContainer">
            
            <img
              src={filteredCollection.cover}
              alt="Cover"
              className="collectionsImg"
              onLoad={() => handleImageLoad('cover')}
              onError={() => handleImageError('cover')}
              style={{ display: imageLoading['cover'] ? 'none' : 'block' }}
            />
            {filteredCollection.contentCollection.length > 0 ? (
              filteredCollection.contentCollection.map((content) => (

                <div key={content.id} className="imageWrapper">
                          
                  {imageLoading[content.id] && (
                    <LoaderCard/>
                  )}
                  <img
                    className="collectionsImg"
                    src={content.urls.full}
                    alt={content.alt_description || "Collection image"}
                    onLoad={() => handleImageLoad(content.id)} // Marca la imagen como cargada
                    onError={() => handleImageError(content.id)} // Maneja el error de carga
                    style={{ display: imageLoading[content.id] ? 'none' : 'block' }} // Oculta la imagen mientras se carga
                  />
                </div>
              ))
            ) : (
              <p>No images available for {filteredCollection.name}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
