type BillingType = "MONTHLY" | "YEARLY";

interface PlanCardProps {
  name: string;
  priceMo: number;
  desc: string;
  billing: BillingType;
}

function PlanCard(props: PlanCardProps) {
  return (
    <label
      className="rounded-lg p-4 h-24 flex items-center justify-center gap-4 border-2 has-[input:checked]:border-blue-500"
      htmlFor={props.name}
    >
      <input
        className="size-6"
        type="checkbox"
        name="add-on"
        id={props.name}
        value={props.name}
      />

      <div className="text-sm flex-1">
        <p className="font-semibold text-blue-950">{props.name}</p>
        <p className="opacity-35">{props.desc}</p>
      </div>

      <p className="text-blue-700">
        {props.billing === "MONTHLY"
          ? `$${props.priceMo}/mo`
          : `$${props.priceMo}/yr`}
      </p>
    </label>
  );
}

export function Step3() {
  const addOns = [
    {
      name: "Online service",
      priceMo: 1,
      desc: "Acces to multiplayer games",
    },
    {
      name: "Larger storage",
      priceMo: 2,
      desc: "Extra 1TB of cloud save",
    },
    {
      name: "Customizable profile",
      priceMo: 2,
      desc: "Custom theme on your profile",
    },
  ];

  const billing: BillingType = "MONTHLY";

  return (
    <div className="flex gap-4 flex-col mb-8">
      <h2 className="text-2xl font-semibold text-blue-950">Pick add-ons</h2>
      <p className="opacity-40">Add-ons help enhance your gaming experience</p>
      {addOns.map((addOn) => {
        return <PlanCard key={addOn.name} {...addOn} billing={billing} />;
      })}
    </div>
  );
}
