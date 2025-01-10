import { useFormContext } from "../../hooks/use_form_context";
import { priceString } from "./utils";

type BillingType = "MONTHLY" | "YEARLY";

interface AddOnsDataArray {
  id: "onlineService" | "largerStorage" | "customizableProfile";
  name: string;
  price: number;
  desc: string;
}
const addOns: AddOnsDataArray[] = [
  {
    id: "onlineService",
    name: "Online service",
    price: 1,
    desc: "Acces to multiplayer games",
  },
  {
    id: "largerStorage",
    name: "Larger storage",
    price: 2,
    desc: "Extra 1TB of cloud save",
  },
  {
    id: "customizableProfile",
    name: "Customizable profile",
    price: 2,
    desc: "Custom theme on your profile",
  },
];

interface AddOnsCardProps {
  id: "onlineService" | "largerStorage" | "customizableProfile";
  name: string;
  price: number;
  desc: string;
  billing: BillingType;
}

function AddOnsCard({ id, name, price, desc, billing }: AddOnsCardProps) {
  const { formData, updateFormData } = useFormContext();

  //when an checkbox input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    updateFormData({
      addOns: {
        ...formData.addOns,
        [id]: checked,
      },
    });
  };
  return (
    <label
      className="rounded-lg p-6 max-h-20 flex items-center justify-center gap-4 border-2 has-[input:checked]:border-blue-500 cursor-pointer hover:bg-slate-100 md:max-h-24"
      htmlFor={name}
    >
      <input
        className="size-6"
        type="checkbox"
        name="add-on"
        id={name}
        value={name}
        checked={formData.addOns[id]}
        onChange={handleChange}
      />

      <div className="text-sm flex-1">
        <p className="font-semibold text-blue-950">{name}</p>
        <p className="opacity-35">{desc}</p>
      </div>

      <p className="text-blue-700">{priceString(billing, price)}</p>
    </label>
  );
}

export function Step3() {
  const formData = useFormContext().formData;

  const billing: BillingType = formData.plan.billing;

  const adjustedAddOns = addOns.map((addOn) => ({
    ...addOn,
    price: billing === "YEARLY" ? addOn.price * 10 : addOn.price,
  }));

  return (
    <div className="flex gap-4 flex-col ">
      <h2 className="text-2xl font-semibold text-blue-950">Pick add-ons</h2>
      <p className="opacity-40">Add-ons help enhance your gaming experience</p>
      <div className="flex flex-col gap-4">
        {adjustedAddOns.map((addOn) => {
          return <AddOnsCard key={addOn.name} {...addOn} billing={billing} />;
        })}
      </div>
    </div>
  );
}
