import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { SubscriptionNav } from "../components/subscription_nav/subscription_nav";
import { SubscriptionFooter } from "../components/subscription_footer/subcription_footer";

export function SubscriptionPage() {
  const steps = ["", "step1", "step2", "step3", "step4", "step5"];
  const location = useLocation();
  const current = location.pathname.split("/").pop();

  return (
    <div className="bg-slate-200 h-screen w-screen flex-col flex">
      <SubscriptionNav
        currentStep={current ? Number(current.split("").pop()) : 0} //aled, comment est ce qu'on en est arrivé là.
      />
      <div className="p-6 py-8 rounded-lg relative bg-white mx-4">
        <Outlet />
      </div>

      <SubscriptionFooter />
    </div>
  );
}
