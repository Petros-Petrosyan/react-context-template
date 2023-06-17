import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const UsersContext = createContext(null);

const initialState = {
  loading: false,
  error: false,
  users: [],
};

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext };
