import { useFormContext } from "../../hooks/use_form_context";
import { useSubscriptionStep } from "../../hooks/use_subscription_step";

export function SubscriptionFooter() {
  const { isStepValid } = useFormContext();
  const { navigateToNext, navigateToPrevious, getCurrentStepNumber } =
    useSubscriptionStep();
  const current = getCurrentStepNumber();

  const handleNext = () => {
    if (isStepValid(getCurrentStepNumber())) {
      navigateToNext();
    }
  };

  return (
    <div className="flex justify-between p-4 items-center bg-white md:rounded-xl ">
      {current !== 1 && current !== 5 && (
        <button className="text-slate-400 h-min" onClick={navigateToPrevious}>
          Go Back
        </button>
      )}
      {current !== 5 && (
        <button
          className={`${
            isStepValid(current) ? "opacity-100" : "opacity-40"
          } bg-blue-950 px-4 py-2 rounded-md text-white ml-auto`}
          onClick={handleNext}
        >
          {current === 4 ? "Confirm" : "Next Step"}
        </button>
      )}
    </div>
  );
}
