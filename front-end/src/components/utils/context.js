import { createContext } from "react";
import { useState } from "react";
import number from "yup";

import { createContext } from "react";
import { useState } from "react";


export const Context = createContext([]);
export const ContextProvider = ({ children }) => {
  const [inLoading, setIsLoading] = useState(false);
  const [signUpUserInfo, setSignUpUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    currencyType: "MNT",
    balance: Num
  });
  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <Context.Provider
      value={{ setIsLoading, signUpUserInfo, setSignUpUserInfo, startLoading }}
    >
      {children}
    </Context.Provider>
  );
};
