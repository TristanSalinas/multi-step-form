import { useNavigate } from "react-router-dom";

export function Step4() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Hi this is the Step4</h2>
      <button
        onClick={() => {
          navigate("/subscription/Step5");
        }}
      >
        PROCEED to step 5
      </button>
    </>
  );
}
