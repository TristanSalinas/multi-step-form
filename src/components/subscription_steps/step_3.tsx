import { useNavigate } from "react-router-dom";
export function Step3() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Hi this is the Step3</h2>
      <button
        onClick={() => {
          navigate("/subscription/Step4");
        }}
      >
        PROCEED to step 4
      </button>
    </>
  );
}
