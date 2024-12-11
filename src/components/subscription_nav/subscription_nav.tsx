import { useSubscriptionStep } from "../../hooks/usesubscriptionstep";

export function SubscriptionNav() {
  let currentStep = useSubscriptionStep().current;
  return (
    <div className="relative">
      <div
        className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] h-48 w-full bg-center bg-cover
      absolute z-0"
      ></div>
      <div className="flex relative z-10 gap-4 justify-center items-center">
        {[...Array(4)].map((_, index) => {
          return (
            <div
              key={index}
              className={`${
                currentStep - 1 === index ? "bg-blue-400" : ""
              } w-8 h-8 my-8 text-center flex justify-center items-center text-white border border-white rounded-full`}
            >
              <p>{index + 1}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
