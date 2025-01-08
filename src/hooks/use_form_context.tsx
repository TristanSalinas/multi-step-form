import { useContext } from "react";
import { FormContext } from "../contexts/form_context";
//import { User, Plan, AddOns } from "../types/form_types";

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useCart is called yet no cartContext is found");
  }
  const { formData, updateFormData } = context;

  const isStepValid = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        if (formData.user) {
          return (
            !!formData.user.name &&
            formData.user.name !== "" &&
            !!formData.user.email &&
            formData.user.email !== "" &&
            !!formData.user.phone &&
            formData.user.phone !== ""
          );
        } else {
          return false;
        }
      case 2:
        return formData.plan !== undefined;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return {
    formData,
    updateFormData,
    isStepValid,
  };
}
