import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [selectImage, setSelectImage] = useState([]);

  const options = {
    selectImage,
    setSelectImage,
  };

  return <Context.Provider value={options}>{children}</Context.Provider>;
};

export const useSelectImage = () => useContext(Context);

export default Provider;
