import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  selectedImage: new Set(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return {
        ...state,
        payload: state.selectedImage.add(action.id),
      };
    case "DELETE_IMAGE":
      return {
        ...state,
        payload: state.selectedImage.remove(action.id),
      };
  }
  return state;
};
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useSelectImage = () => useContext(Context);

export default Provider;
