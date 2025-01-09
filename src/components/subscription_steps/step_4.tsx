import { useFormContext } from "../../hooks/use_form_context";
import { Plan, AddOns } from "../../types/form_types";
import { Link } from "react-router-dom";

function PlanLine({ name, price, billing }: Plan) {
  return (
    <div className="flex justify-between items-center border-b-2 pb-4">
      <div>
        <h3 className="font-semibold text-blue-950">
          {name} (
          {billing.toLowerCase().charAt(0).toUpperCase() +
            billing.slice(1).toLowerCase()}
          )
        </h3>
        <Link className="underline opacity-50" to="/subscription/step2">
          Change
        </Link>
      </div>
      <p className="font-bold text-blue-950 ">
        {billing === "MONTHLY" ? "$" + price + "/mo" : "$" + price + "/yr"}
      </p>
    </div>
  );
}

function AddOnLine({ name, price, billing }: Plan) {
  return (
    <div className="flex justify-between items-center py-4">
      <p className="opacity-60">{name}</p>
      <p className="text-blue-900 font-semibold">
        {billing === "MONTHLY" ? "+$" + price + "/mo" : "+$" + price + "/yr"}
      </p>
    </div>
  );
}
export function Step4() {
  const formData = useFormContext().formData;
  const addOns = [
    {
      id: "onlineService",
      name: "Online service",
      price: 1,
    },
    {
      id: "largerSrtorage",
      name: "Larger storage",
      price: 2,
    },
    {
      id: "customizableProfile",
      name: "Customizable profile",
      price: 2,
    },
  ];
  const adjustedAddOns = addOns.map((addOn) => ({
    ...addOn,
    price: formData.plan?.billing === "YEARLY" ? addOn.price * 10 : addOn.price,
  }));

  const selectedAddOns = adjustedAddOns.filter(
    (addOn) => formData.addOns?.[addOn.id as keyof AddOns]
  );
  let billing: "YEARLY" | "MONTHLY" | undefined = formData.plan?.billing;

  if (billing === undefined) {
    billing = "MONTHLY";
  }

  const priceTotal =
    selectedAddOns.reduce((res, addOn) => addOn.price + res, 0) +
    (formData.plan?.price ?? 0);

  return (
    <div className="flex gap-4 flex-col mb-8">
      <h2 className="text-2xl font-semibold text-blue-950">Finnishing up</h2>
      <p className="opacity-40">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-slate-100 p-4 pt-6 rounded-lg">
        {formData.plan && <PlanLine {...formData.plan} />}

        {formData.plan?.billing &&
          selectedAddOns.map((addOn) => (
            <AddOnLine key={addOn.id} {...addOn} billing={billing} />
          ))}
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="opacity-40">
          Total {billing === "MONTHLY" ? "(per month)" : "(per year)"}
        </p>
        <p className="text-blue-700 font-bold">
          {billing === "MONTHLY"
            ? "+$" + priceTotal + "/mo"
            : "+$" + priceTotal + "/yr"}
        </p>
      </div>
    </div>
  );
}
