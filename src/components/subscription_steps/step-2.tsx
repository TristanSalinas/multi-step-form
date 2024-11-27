import { useNavigate } from "react-router-dom";
export function Step2() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Hi this is the Step2</h2>
      <button
        onClick={() => {
          navigate("/subscription/Step3");
        }}
      >
        PROCEED to step 3
      </button>
    </>
  );
}
