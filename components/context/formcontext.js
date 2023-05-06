import React, { createContext, useEffect, useReducer } from "react";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  let storage;
  let initialValue = { natal: null };
  const [state, dispatch] = useReducer(formReducer, initialValue);

  useEffect(() => {
    let mouted = true;
    if (mouted) {
      const cookie = sessionStorage.getItem("form");
      if (cookie !== null && cookie !== "" && cookie !== undefined) {
        storage = JSON.parse(cookie);
      } else {
        storage = { kundli: null };
      }
      dispatch({ type: "UPDATE", payload: storage });
    }
    return () => {
      mouted = false;
    };
  }, []);

  const adduserdata = (payload) => {
    dispatch({ type: "ADD_USERDATA", payload });
  };

  const deleteuserdata = (payload) => {
    dispatch({ type: "DELETE", payload });
  };

  const contextValues = {
    adduserdata,
    deleteuserdata,
    ...state,
  };
  return (
    <FormContext.Provider value={contextValues}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage(state),
      };
    case "DELETE":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage(state),
      };

    case "ADD_USERDATA":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage(state),
      };
  }
};

const storage = (val) => {
  sessionStorage.setItem("form", JSON.stringify(val));
};
