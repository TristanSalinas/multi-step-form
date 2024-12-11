import { useSubscriptionStep } from "../../hooks/usesubscriptionstep";

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
          className="px-4 py-2 rounded-md bg-blue-950 text-white"
          onClick={useSubscriptionStep().next}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
