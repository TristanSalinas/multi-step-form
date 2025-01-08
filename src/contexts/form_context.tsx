import { createContext, ReactNode, useState } from "react";
import { FormData } from "../types/form_types";

type UpdateFormDataSignature = (newData: Partial<FormData>) => void;

interface FormContextType {
  formData: FormData;
  updateFormData: UpdateFormDataSignature;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export function FormContextProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState({});

  const updateFormData: UpdateFormDataSignature = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };
  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}
