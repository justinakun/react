import "./Photos.css";
import { useState, useEffect } from 'react';
import Photo from "../Photo/Photo";

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const photosExists = photos.length > 0;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((resp) => resp.json())
            .then((response) => {
                setPhotos(response);
            })
            .catch((error) => console.log(error));
    }, []);

  return (
    <div>
        {photosExists && (
        <>
            <Photo imageURL={photos[0].url} title={photos[0].title}/>
            <Photo imageURL={photos[1].url} title={photos[1].title}/>        
        </>            
        )}
    </div>
  );
};

export default Photos;