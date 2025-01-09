import thank_you from "/assets/images/icon-thank-you.svg";
import { Link } from "react-router-dom";
export function Step5() {
  return (
    <div className="flex justify-center gap-4 flex-col items-center min-h-60">
      <img src={thank_you} alt="Thank You image" className="w-12 h-12" />
      <h2 className="font-bold text-blue-950 text-2xl">Thank you!</h2>
      <p className="text-center opacity-80">
        Thanks for confirming your subscription!
        <br />
        If you ever need support, please feel free to email us at
        <br />
        support@loremgaming.com.
      </p>

      <Link to="/">
        <button className=" bg-blue-950 px-4 py-2 rounded-md text-white">
          Ok
        </button>
      </Link>
    </div>
  );
}
