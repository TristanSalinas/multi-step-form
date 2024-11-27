import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hi this is the landing Page</h1>
      <button
        onClick={() => {
          navigate("/subscription/Step1");
        }}
      >
        PROCEED to step 1
      </button>
    </>
  );
}
