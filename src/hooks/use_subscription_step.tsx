import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
} from "../components/subscription_steps";

interface UseSubscriptionStepReturn {
  navigateToNext: () => void;
  navigateToPrevious: () => void;
  getCurrentStepNumber: () => number;
  getStepComponent: (step?: number) => JSX.Element;
  getCurrentStepComponent: () => JSX.Element;
  navigateTo: (number: number) => void;
}

export function useSubscriptionStep(): UseSubscriptionStepReturn {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getCurrentStepNumber = () =>
    parseInt(searchParams.get("step") ?? "1") ?? 1;

  const getStepComponent = (step?: number) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      default:
        return <Step1 />;
    }
  };

  const getCurrentStepComponent = () =>
    getStepComponent(getCurrentStepNumber());

  const navigateToNext = () => {
    navigate(`/subscription?step=${(getCurrentStepNumber() + 1).toString()}`);
  };

  const navigateToPrevious = () => {
    if (getCurrentStepNumber() > 1) {
      navigate(`/subscription?step=${(getCurrentStepNumber() - 1).toString()}`);
    }
  };

  const navigateTo = (stepNumber: number) => {
    navigate(`/subscription?step=${stepNumber}`);
  };

  return {
    navigateToNext,
    navigateToPrevious,
    getCurrentStepNumber,
    navigateTo,
    getStepComponent,
    getCurrentStepComponent,
  };
}
