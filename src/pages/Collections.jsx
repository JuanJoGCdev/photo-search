import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";
import './Collections.scss';
import useCollections from "../hooks/useCollections";

const Collections = () => {
  const { collectionName } = useParams(); // Extrae el parámetro de la URL
  const collections = useCollections();

  // Filtra la colección basada en el nombre obtenido de la URL
  const filteredCollection = collections.find(
    (collection) => collection.name.toLowerCase() === collectionName.toLowerCase()
  );

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
            <img src={filteredCollection.cover} alt="Cover" className="collectionsImg" />
            {filteredCollection.contentCollection.length > 0 ? (
              filteredCollection.contentCollection.map((content) => (
                <img
                  className="collectionsImg"
                  key={content.id}
                  src={content.urls.full}
                  alt={content.alt_description || "Collection image"}
                />
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
