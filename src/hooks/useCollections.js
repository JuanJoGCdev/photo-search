// src/hooks/useCollections.js
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchData} from '../apis/unsplash/apiService';
import { addCollections } from '../redux/actions/collectionsActions';

// Datos de las colecciones
const initialCollections = [
    { name: "Wedding", coverId: "FTW8ADj5igs" },
    { name: "Outdoors", coverId: "z26WcFRvOmY" },
    { name: "Portraits", coverId: "BRy-Cg-2s4k" },
    { name: "Travel", coverId: "O453M2Liufs" },
    { name: "Pets", coverId: "usTb7ZMa6QI" },
    { name: "Christmas", coverId: "SUTfFCAHV_A" },
    { name: "Products", coverId: "zZm7th0E47M" },
    { name: "Halloween", coverId: "EFQlS6SL9uw" },
];

// Función para obtener la URL de la portada de una colección usando su ID
const getCover = async (idImg) => {
    try {
        const coverResult = await fetchData(`${idImg}?`);
        console.log(`Cover Result for ${idImg}:`, coverResult); // Verifica la respuesta
        return coverResult.urls.small; // Asegúrate de que esta propiedad exista
    } catch (error) {
        console.error('Error fetching cover:', error);
        return 'img'; // Imagen predeterminada en caso de error
    }
};

// Función para obtener el contenido de una colección
const fetchCollectionContent = async (queryCollection) => {
    try {
        const collectionResult = await fetchData(`random?query=${queryCollection}&count=5&`);
        console.log(`Collection Content for ${queryCollection}:`, collectionResult); // Verifica la respuesta
        return collectionResult;
    } catch (error) {
        console.error('Error fetching collection content:', error);
        return [];
    }
};

const useCollections = () => {
    const [collections, setCollections] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                // Verificar si los datos están en localStorage
                const storedCollections = localStorage.getItem('collections');
                if (storedCollections) {
                    const parsedCollections = JSON.parse(storedCollections);
                    setCollections(parsedCollections);
                    dispatch(addCollections(parsedCollections));
                    return;
                }

                // Obtiene todas las portadas
                const coverPromises = initialCollections.map(async (collection) => {
                    const coverUrl = await getCover(collection.coverId);
                    return { ...collection, cover: coverUrl };
                });

                const collectionsWithCover = await Promise.all(coverPromises);

                // Obtiene el contenido para cada colección
                const contentPromises = collectionsWithCover.map(async (collection) => {
                    const contentCollection = await fetchCollectionContent(collection.name);
                    return { ...collection, contentCollection };
                });

                const updatedCollections = await Promise.all(contentPromises);

                // Guardar los datos en localStorage
                localStorage.setItem('collections', JSON.stringify(updatedCollections));

                // Actualiza el estado global y local
                dispatch(addCollections(updatedCollections));
                setCollections(updatedCollections);

            } catch (error) {
                console.error('Error fetching collections:', error);
            }
        };

        fetchCollections();
    }, [dispatch]);

    return collections;
};

export default useCollections;
