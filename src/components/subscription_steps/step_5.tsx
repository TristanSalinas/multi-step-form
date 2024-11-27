import { useNavigate } from "react-router-dom";

export function Step5() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Congratulation, you completed the subscription</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return to the landing page
      </button>
    </>
  );
}
