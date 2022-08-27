import { createContext } from "react";
const FormContext=createContext();
const useFormContext=()=>FormContext();

const FormProvider = ({ children }) => {
  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
};

export { FormProvider,useFormContext}
