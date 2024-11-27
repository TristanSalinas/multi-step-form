import { useNavigate } from "react-router-dom";

export function Step1() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Hi this is the Step1</h2>
      <button
        onClick={() => {
          navigate("/subscription/Step2");
        }}
      >
        PROCEED to step 2
      </button>
    </>
  );
}
