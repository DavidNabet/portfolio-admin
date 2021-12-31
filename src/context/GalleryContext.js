import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [selectImage, setSelectImage] = useState([]);

  const addImage = async (infoImage) => {
    const newSelectImage = [...selectImage];
    const exist = newSelectImage.find((elem) => elem === infoImage);
    if (!exist) {
      newSelectImage.push(infoImage);
      setSelectImage(newSelectImage);
      console.log("checkAdded ", infoImage);
    } else {
      const index = newSelectImage.indexOf(exist);
      newSelectImage.splice(index, 1);
      setSelectImage(newSelectImage);
      console.log("checkRemoved ", infoImage);
    }
  };

  const options = {
    selectImage,
    addImage,
  };

  return <Context.Provider value={options}>{children}</Context.Provider>;
};

export const useSelectImage = () => useContext(Context);

export default Provider;
