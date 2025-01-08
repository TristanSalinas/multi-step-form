import { useFormContext } from "../../hooks/use_form_context";
import { useSubscriptionStep } from "../../hooks/use_subscription_step";

export function SubscriptionFooter() {
  const { isStepValid } = useFormContext();
  const { current, next, previous } = useSubscriptionStep();
  const handleNext = () => {
    if (isStepValid(current)) {
      next();
    }
  };
  console.log(current);
  return (
    <div className="  flex-1 flex items-end">
      <div className="flex flex-1 justify-between p-4 items-center bg-white ">
        {current !== 1 ? (
          <button className="text-slate-400 h-min" onClick={previous}>
            Go Back
          </button>
        ) : (
          <div></div>
        )}
        <button
          className={`${isStepValid(current) ? "opacity-100" : "opacity-40"}  bg-blue-950 px-4 py-2 rounded-md text-white`}
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
