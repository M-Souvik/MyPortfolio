import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const value = { example: "Hello World" };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
