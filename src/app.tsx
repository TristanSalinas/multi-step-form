import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SubscriptionPage } from "./pages/subscription_page";
import { Step1 } from "./components/subscription_steps/step_1";
import { Step2 } from "./components/subscription_steps/step_2";
import { Step3 } from "./components/subscription_steps/step_3";
import { Step4 } from "./components/subscription_steps/step_4";
import { Step5 } from "./components/subscription_steps/step_5";
import { LandingPage } from "./pages/landing_page";

function App() {
  //basename="/multi-step-form" => quick fix to match the {base:/multi-step-form/} in vite-config to deploy on github page
  return (
    <BrowserRouter basename="/multi-step-form">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subscription" element={<SubscriptionPage />}>
          <Route path="step1" element={<Step1 />} />
          <Route path="step2" element={<Step2 />} />
          <Route path="step3" element={<Step3 />} />
          <Route path="step4" element={<Step4 />} />
          <Route path="step5" element={<Step5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
