import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen">
      <main className="w-screen h-screen flex flex-col justify-around items-center gap-6 bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover">
        <h1 className="text-4xl text-blue-200">Hello There</h1>
        <button
          className="bg-blue-100 text-blue-800 p-4 rounded-md"
          onClick={() => {
            navigate("/subscription/Step1");
          }}
        >
          PROCEED
        </button>
      </main>
    </div>
  );
}
