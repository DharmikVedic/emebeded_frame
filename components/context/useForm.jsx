import { useContext } from "react";
import { FormContext } from "./formcontext";

const useForm = () => {
  const context = useContext(FormContext);
  return {
    ...context,
  };
};

export default useForm;
