import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const value = { example: "Promptomania is a Mern-based Project through which users can know what type of prompts they can give to the AI like ChatGPT, Blackbox AI, etc." };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
