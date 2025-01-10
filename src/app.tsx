import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SubscriptionPage } from "./pages/subscription_page";
import { LandingPage } from "./pages/landing_page";

function App() {
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
