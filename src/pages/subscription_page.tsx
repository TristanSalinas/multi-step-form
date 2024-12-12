import { Outlet } from "react-router-dom";
import { SubscriptionNav } from "../components/subscription_nav/subscription_nav";
import { SubscriptionFooter } from "../components/subscription_footer/subcription_footer";
import { FormContextProvider } from "../contexts/form_context";
export function SubscriptionPage() {
  // const steps = ["", "step1", "step2", "step3", "step4", "step5"];

  return (
    <div className="bg-slate-200 h-screen w-screen flex-col flex">
      <FormContextProvider>
        <SubscriptionNav />
        <div className="p-6 py-8 rounded-lg relative bg-white mx-4">
          <Outlet />
        </div>
        <SubscriptionFooter />
      </FormContextProvider>
    </div>
  );
}
