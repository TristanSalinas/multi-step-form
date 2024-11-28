interface StepFooterProps {
  handleNext: () => void;
  handlePrevious: () => void;
}

export function SubscriptionFooter({
  handlePrevious,
  handleNext,
}: StepFooterProps) {
  return (
    <div className="  flex-1 flex items-end">
      <div className="flex flex-1 justify-between p-4 items-center bg-white ">
        <button className="text-slate-400 h-min" onClick={handlePrevious}>
          Go Back
        </button>
        <button
          className="px-4 py-2 rounded-md bg-blue-950 text-white"
          onClick={handleNext}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
