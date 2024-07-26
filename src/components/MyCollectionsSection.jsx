import React, { useMemo } from "react";
import "./MyCollectionsSection.scss";
import CollecionsTarget from "./CollecionsTarget";
import useCollections from "../hooks/useCollections";

const MyCollectionsSection = () => {
  const collections = useCollections();

  // Memoriza las colecciones para evitar cálculos innecesarios
  const memoizedCollections = useMemo(() => collections, [collections]);

  return (
    <div className="myCollectionsSectionContainer">
      <section className="myCollectionsSectionHeader">
        <h2 className="myCollectionsSectionTitle">My Collections</h2>
      </section>
      <section className="myCollections">
        {memoizedCollections.map((collection) => (
          <CollecionsTarget
            key={collection.coverId} // Usar coverId como key, es único
            cover={collection.cover}
            nameCollection={collection.name}
          />
        ))}
      </section>
    </div>
  );
};

export default MyCollectionsSection;
