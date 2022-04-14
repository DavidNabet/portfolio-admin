import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  arrImages: new Set(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      state.arrImages.add(action.id);
      return { ...state };
    case "DELETE_IMAGE":
      state.arrImages.remove(action.id);
      return { ...state };
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
