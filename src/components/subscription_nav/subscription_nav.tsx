import { useSubscriptionStep } from "../../hooks/use_subscription_step";

export function SubscriptionNav() {
  const currentStep = useSubscriptionStep().getCurrentStepNumber();
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  return (
    <div className="relative md:w-80">
      <div
        className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] h-48 w-full bg-center bg-cover
      absolute z-0 md:inset-0 md:h-full md:w-auto md:rounded-xl md:bg-[url('./assets/images/bg-sidebar-desktop.svg')]"
      ></div>
      <div className="flex relative z-10 gap-4 justify-center items-center md:flex-col md:p-8 md:items-start">
        {steps.map((stepName, index) => {
          return (
            <div key={index} className="md:flex md:gap-8 md:items-center">
              <div
                className={`${
                  currentStep - 1 === index ? "bg-blue-400" : ""
                } w-8 h-8 my-8 text-center flex justify-center items-center text-white border border-white rounded-full md:my-0 md:h-12 md:w-12`}
              >
                <p>{index + 1}</p>
              </div>
              <div className="text-white hidden md:block">
                <p className="font-thin">STEP {index}</p>
                <p className="font-semibold">{stepName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
