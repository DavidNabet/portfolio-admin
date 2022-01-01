import { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
// import { useSelectImage } from "../context/GalleryContext";

const Gallery = ({ slider, setSlider }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cloudinary, setCloudinary] = useState([]);

  // const { addImage } = useSelectImage();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3200/works/gallery");

        if (response.status === 200) {
          setIsLoading(false);
          setCloudinary(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchImages();
  }, []);

  const addImage = (infoImage) => {
    const newSelectImage = [...slider];
    const exist = newSelectImage.find((elem) => elem === infoImage);
    if (!exist) {
      newSelectImage.push(infoImage);
      setSlider(newSelectImage);
      console.log("checkAdded ", infoImage, exist);
    } else {
      const index = newSelectImage.indexOf(exist);
      newSelectImage.splice(index, 1);
      setSlider(newSelectImage);
      console.log("checkRemoved ", infoImage, exist);
    }
  };

  return (
    <div className="relative bg-white dark:bg-slate-50 mr-6">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-80 h-full">
          {isLoading ? (
            <div>Chargement...</div>
          ) : (
            <>
              {cloudinary.map((image, i) => {
                return (
                  <div key={i} className={`flex`}>
                    <Image onCheck={addImage} img={image} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
