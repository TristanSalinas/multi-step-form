import { Outlet } from "react-router-dom";
import { SubscriptionNav } from "../components/subscription_nav/subscription_nav";

export function SubscriptionPage() {
  return (
    <main>
      <h1>This is the subscription page</h1>
      <SubscriptionNav />
      <Outlet />
    </main>
  );
}
