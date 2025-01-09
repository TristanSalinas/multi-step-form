import { useFormContext } from "../../hooks/use_form_context";

type BillingType = "MONTHLY" | "YEARLY";

interface AddOnsCardProps {
  id: "onlineService" | "largerSrtorage" | "customizableProfile";
  name: string;
  price: number;
  desc: string;
  billing: BillingType;
}

function AddOnsCard(props: AddOnsCardProps) {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    //si formData n'a pas encore d'addons on les ajoutes

    if (!formData.addOns) {
      const defaultaddons = {
        onlineService: false,
        largerSrtorage: false,
        customizableProfile: false,
      };
      //on update la form avec la nouvelle valeure checked de l'input
      updateFormData({
        ...formData,
        addOns: {
          ...defaultaddons,
          [props.id]: checked,
        },
      });
    } else {
      //Sinon on update juste la valeure concernée par le changement de la checkbox sans toucher aux autre
      updateFormData({
        ...formData,
        addOns: {
          ...formData.addOns,
          [props.id]: !formData.addOns[props.id],
        },
      });
    }
  };
  return (
    <label
      className="rounded-lg p-6 max-h-20 flex items-center justify-center gap-4 border-2 has-[input:checked]:border-blue-500 cursor-pointer hover:bg-slate-100 md:max-h-24"
      htmlFor={props.name}
    >
      <input
        className="size-6"
        type="checkbox"
        name="add-on"
        id={props.name}
        value={props.name}
        checked={formData.addOns ? formData.addOns[props.id] : false}
        onChange={handleChange}
      />

      <div className="text-sm flex-1">
        <p className="font-semibold text-blue-950">{props.name}</p>
        <p className="opacity-35">{props.desc}</p>
      </div>

      <p className="text-blue-700">
        {props.billing === "MONTHLY"
          ? `$${props.price}/mo`
          : `$${props.price}/yr`}
      </p>
    </label>
  );
}

interface AddOnsDataArray {
  id: "onlineService" | "largerSrtorage" | "customizableProfile";
  name: string;
  price: number;
  desc: string;
}

export function Step3() {
  const formData = useFormContext().formData;

  const addOns: AddOnsDataArray[] = [
    {
      id: "onlineService",
      name: "Online service",
      price: 1,
      desc: "Acces to multiplayer games",
    },
    {
      id: "largerSrtorage",
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

  const billing: BillingType = formData.plan?.billing
    ? formData.plan?.billing
    : "MONTHLY";

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
