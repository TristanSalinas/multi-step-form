import { useFormContext } from "../../hooks/use_form_context";
import { User } from "../../types/form_types";

interface Step1InputProps {
  label: string;
  inputId: string;
  placeholder: string;
  type: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Step1Input({
  label,
  inputId,
  placeholder,
  type,
  value,
  onChange,
}: Step1InputProps) {
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
        onChange={onChange}
        id={inputId}
        type={type}
        value={value || ""}
        placeholder={placeholder}
      />
    </>
  );
}

export function Step1() {
  const data = useFormContext();

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.updateFormData({
      ...data.formData,
      user: {
        ...data.formData.user,
        name: e.target.value,
      },
    });
  };

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.updateFormData({
      ...data.formData,
      user: {
        ...data.formData.user,
        email: e.target.value,
      },
    });
  };
  const updatePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.updateFormData({
      ...data.formData,
      user: {
        ...data.formData.user,
        phone: e.target.value,
      },
    });
  };

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
        value={data.formData.user?.name}
        onChange={updateName}
      />
      <Step1Input
        label="Email Address"
        inputId="email"
        placeholder="e.g. stephenkin@lorem.com"
        type="email"
        value={data.formData.user?.email}
        onChange={updateEmail}
      />
      <Step1Input
        label="Phone Number"
        inputId="phone"
        placeholder="e.g. +1 234 567 890"
        type="tel"
        value={data.formData.user?.phone}
        onChange={updatePhone}
      />
    </>
  );
}
