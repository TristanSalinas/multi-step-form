import { useSearchParams } from "react-router-dom";
import { Step1 } from "../components/subscription_steps/step_1";
import { Step2 } from "../components/subscription_steps/step_2";
import { Step3 } from "../components/subscription_steps/step_3";
import { Step4 } from "../components/subscription_steps/step_4";
import { Step5 } from "../components/subscription_steps/step_5";
import { SubscriptionNav } from "../components/subscription_nav/subscription_nav";
import { SubscriptionFooter } from "../components/subscription_footer/subcription_footer";
import { FormContextProvider } from "../contexts/form_context";

export function SubscriptionPage() {
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");

  const toDisplay = (step: string | null) => {
    switch (step) {
      case "1":
        return <Step1 />;
      case "2":
        return <Step2 />;
      case "3":
        return <Step3 />;
      case "4":
        return <Step4 />;
      case "5":
        return <Step5 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="bg-slate-200 h-screen w-screen flex-col flex md:flex-row md:grow">
      <FormContextProvider>
        <div className="flex flex-col grow md:flex-row rounded-xl md:bg-white md:p-3 md:my-20 md:m-auto md:max-h-fit md:max-w-5xl">
          <SubscriptionNav />
          <div className="flex flex-col justify-between md:flex-grow">
            <div className="px-6 pt-8 rounded-lg relative bg-white mx-4 md:mx-0 md:px-16 md:grow md:mi">
              {toDisplay(step)}
            </div>
            <SubscriptionFooter />
          </div>
        </div>
      </FormContextProvider>
    </div>
  );
}
