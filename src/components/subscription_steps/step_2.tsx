import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";
import { ToggleSwitch } from "../sub_components/toggle_switch";
import { useFormContext } from "../../hooks/use_form_context";
import { priceString } from "./utils";
const plans = [
  {
    iconPath: arcadeIcon,
    name: "Arcade",
    price: 9,
  },
  {
    iconPath: advancedIcon,
    name: "Advanced",
    price: 12,
  },
  {
    iconPath: proIcon,
    name: "Pro",
    price: 15,
  },
];

type BillingType = "MONTHLY" | "YEARLY";

interface PlanCardProps {
  iconPath: string;
  name: string;
  price: number;
}

function PlanCard({ iconPath, name, price }: PlanCardProps) {
  const { formData, updateFormData } = useFormContext();
  return (
    <label className="flex-1 " htmlFor={name}>
      <input
        className="peer hidden"
        type="radio"
        name="plan"
        id={name}
        value={name}
        checked={formData.plan?.name === name}
        onChange={(e) =>
          e.target.checked &&
          updateFormData({
            plan: {
              name: name,
              price: price,
              billing: formData.plan?.billing ?? "MONTHLY",
            },
          })
        }
      />
      <div className="rounded-lg h-24 peer-checked:border-blue-900 peer-checked:bg-blue-50 border-2 p-4 flex gap-4 cursor-pointer hover:bg-slate-100 md:flex-col md:h-fit md:gap-8">
        <img className="h-14 w-14" src={iconPath} />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="opacity-35">
            {priceString(formData.plan?.billing ?? "MONTHLY", price)}
          </p>
          {(formData.plan?.billing ?? "MONTHLY") !== "MONTHLY" && (
            <p>2 months free</p>
          )}
        </div>
      </div>
    </label>
  );
}

export function Step2() {
  const { formData, updateFormData } = useFormContext();

  const updateBilling = (newBilling: BillingType) => {
    if (formData.plan) {
      updateFormData({
        plan: {
          name: formData.plan.name,
          price:
            newBilling === "YEARLY"
              ? formData.plan.price * 10
              : formData.plan.price / 10,
          billing: newBilling,
        },
      });
    } else {
      updateFormData({
        plan: {
          name: "arcade",
          price: newBilling === "YEARLY" ? plans[0].price * 10 : plans[0].price,
          billing: newBilling,
        },
      });
    }
  };

  const adjustedPlans = plans.map((plan) => ({
    ...plan,
    price:
      (formData.plan?.billing ?? "MONTHLY") === "YEARLY"
        ? plan.price * 10
        : plan.price,
  }));

  return (
    <>
      <div className="flex gap-4 flex-col mb-8">
        <h2 className="text-2xl font-semibold text-blue-950">
          Select your plan
        </h2>
        <p className="opacity-40">
          You have the option of monthly or yearly billing
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:h-52">
          {adjustedPlans.map((plan) => {
            return <PlanCard key={plan.name} {...plan} />;
          })}
        </div>
      </div>
      <ToggleSwitch
        leftValue="Monthly"
        rightValue="Yearly"
        isLeftDefault={(formData.plan?.billing ?? "MONTHLY") === "MONTHLY"}
        handleToggle={(isMonthly) =>
          isMonthly ? updateBilling("MONTHLY") : updateBilling("YEARLY")
        }
      />
    </>
  );
}
