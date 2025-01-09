import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen">
      <main className="w-screen h-screen flex flex-col justify-around items-center gap-6 bg-center bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover">
        <button
          className="bg-blue-50 text-blue-800 p-8 rounded-md text-2xl"
          onClick={() => {
            navigate("/subscription?step=1");
          }}
        >
          Click here to subscribe !
        </button>
      </main>
    </div>
  );
}
