import { useFormContext } from "../../hooks/use_form_context";
import { useSubscriptionStep } from "../../hooks/use_subscription_step";

export function SubscriptionFooter() {
  return (
    <div className="  flex-1 flex items-end">
      <div className="flex flex-1 justify-between p-4 items-center bg-white ">
        <button
          className="text-slate-400 h-min"
          onClick={useSubscriptionStep().previous}
        >
          Go Back
        </button>
        <button
          className={`${useFormContext().isStepValid(useSubscriptionStep().current) ? "opacity-100" : "opacity-40"}  bg-blue-950 px-4 py-2 rounded-md text-white`}
          onClick={useSubscriptionStep().next}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
