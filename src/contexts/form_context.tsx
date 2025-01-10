import { createContext, ReactNode, useState } from "react";
import { FormData } from "../types/form_types";

type UpdateFormDataSignature = (newData: Partial<FormData>) => void;

interface FormContextType {
  formData: FormData;
  updateFormData: UpdateFormDataSignature;
}
const initialFormData: FormData = {
  user: {},
  plan: {
    name: "Arcade",
    price: 9,
    billing: "MONTHLY",
  },
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

export const FormContext = createContext<FormContextType>({
  formData: initialFormData,
  updateFormData: () => {},
});

export function FormContextProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData: UpdateFormDataSignature = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };
  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}
