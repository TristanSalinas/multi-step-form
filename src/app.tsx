import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SubscriptionPage } from "./pages/subscription_page";
import { LandingPage } from "./pages/landing_page";

function App() {
  //basename="/multi-step-form" => quick fix to match the {base:/multi-step-form/} in vite-config to deploy on github page
  return (
    <BrowserRouter basename="/multi-step-form">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subscription" element={<SubscriptionPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
