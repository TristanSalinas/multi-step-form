import { ReactElement, useState } from "react";
import { FormContext } from "./form_context";
import { UpdateFormDataSignature, FormData } from "../types/form_types";

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

export function FormContextProvider({ children }: { children: ReactElement }) {
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
