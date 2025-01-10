import { createContext } from "react";
import { FormData, FormContextType } from "../types/form_types";

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
