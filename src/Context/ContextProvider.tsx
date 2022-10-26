import React, { Children, createContext, ReactElement, useContext, useState } from 'react';

type StateContextType = {
  activedMenu: boolean;
  setActivedMenu: React.Dispatch<React.SetStateAction<boolean>>;
  currrentColor: string;
  setCurrrentColor: React.Dispatch<React.SetStateAction<string>>;
};
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
const StateContext = createContext({} as StateContextType);

export const Contextprovider = ({ children }: { children: ReactElement }) => {
  const [activedMenu, setActivedMenu] = useState(false);
  const [currrentColor, setCurrrentColor] = useState('#03C9D7');
  return (
    <StateContext.Provider
      value={{
        activedMenu,
        setActivedMenu,
        currrentColor,
        setCurrrentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
