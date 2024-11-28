import { useNavigate, useLocation } from "react-router-dom";
import { StepFooter } from "./step_footer";

interface Step1InputProps {
  label: string;
  inputId: string;
  placeholder: string;
  type: string;
}

function Step1Input({ label, inputId, placeholder, type }: Step1InputProps) {
  return (
    <>
      <label
        className="block text-sm font-semibold text-blue-900 "
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        className="mb-3 px-2 py-1 block w-full border rounded"
        id={inputId}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}

export function Step1() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h2 className="text-blue-950 text-2xl mb-4 font-bold">Personal Info</h2>
      <p className="text-slate-400 mb-4">
        Please provide your name, email, address, and phone number.
      </p>
      <Step1Input
        label="Name"
        inputId="name"
        placeholder="e.g. Stephen King"
        type="text"
      />
      <Step1Input
        label="Email Address"
        inputId="email"
        placeholder="e.g. stephenkin@lorem.com"
        type="email"
      />
      <Step1Input
        label="Phone Number"
        inputId="phone"
        placeholder="e.g. +1 234 567 890"
        type="tel"
      />
    </>
  );
}
