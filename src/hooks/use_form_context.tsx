import { useContext } from "react";
import { FormContext } from "../contexts/form_context";

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useCart is null");
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
      case 4:
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
