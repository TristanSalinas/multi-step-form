import { useFormContext } from "../../hooks/use_form_context";
import { Plan } from "../../types/form_types";
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
      <p className="font-semibold text-blue-950 ">
        {billing === "MONTHLY" ? "$" + price + "/mo" : "$" + price + "/yr"}
      </p>
    </div>
  );
}

export function Step4() {
  const formData = useFormContext().formData;

  return (
    <div className="flex gap-4 flex-col mb-8">
      <h2 className="text-2xl font-semibold text-blue-950">Finnishing up</h2>
      <p className="opacity-40">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-slate-100 p-4 pt-6 rounded-lg">
        {formData.plan && <PlanLine {...formData.plan} />}
      </div>
    </div>
  );
}
