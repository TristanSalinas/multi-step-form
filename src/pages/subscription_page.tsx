import { SubscriptionNav } from "../components/subscription_nav/subscription_nav";
import { SubscriptionFooter } from "../components/subscription_footer/subcription_footer";
import { FormContextProvider } from "../contexts/form_context_provider";
import { useSubscriptionStep } from "../hooks/use_subscription_step";

export function SubscriptionPage() {
  const { getCurrentStepComponent } = useSubscriptionStep();

  return (
    <div className="bg-slate-200 h-screen w-screen flex-col flex md:flex-row md:grow">
      <FormContextProvider>
        <div className="flex flex-col grow md:flex-row rounded-xl md:bg-white md:p-3 md:my-20 md:m-auto md:max-h-fit md:max-w-5xl">
          <SubscriptionNav />
          <div className="flex flex-col justify-between md:flex-grow">
            <div className="px-6 pt-8 rounded-lg relative bg-white mx-4 md:mx-0 md:px-16 md:grow md:mi">
              {getCurrentStepComponent()}
            </div>
            <SubscriptionFooter />
          </div>
        </div>
      </FormContextProvider>
    </div>
  );
}
