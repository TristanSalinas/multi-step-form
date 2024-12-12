import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";
import { ToggleSwitch } from "../sub_components/toggle_switch";
import { useState } from "react";

type BillingType = "MONTHLY" | "YEARLY";

interface PlanCardProps {
  iconPath: string;
  name: string;
  price: number;
  billing: BillingType;
}

function PlanCard(props: PlanCardProps) {
  return (
    <label htmlFor={props.name}>
      <input
        className="peer hidden"
        type="radio"
        name="plan"
        id={props.name}
        value={props.name}
      />
      <div className="rounded-lg h-24 peer-checked:border-blue-900 peer-checked:bg-blue-50 border-2 p-4 flex gap-4">
        <img src={props.iconPath} />
        <div>
          <p className="font-semibold">{props.name}</p>
          <p className="opacity-35">
            {props.billing === "MONTHLY"
              ? `$${props.price}/mo`
              : `$${props.price * 10}/yr`}
          </p>
          {props.billing !== "MONTHLY" && <p>2 months free</p>}
        </div>
      </div>
    </label>
  );
}

export function Step2() {
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

  const [billing, setBilling] = useState<BillingType>("MONTHLY");

  return (
    <>
      <div className="flex gap-4 flex-col mb-8">
        <h2 className="text-2xl font-semibold text-blue-950">
          Select your plan
        </h2>
        <p className="opacity-40">
          You have the option of monthly or yearly billing
        </p>
        {plans.map((plan) => {
          return <PlanCard key={plan.name} {...plan} billing={billing} />;
        })}
      </div>
      <ToggleSwitch
        leftValue="Monthly"
        rightValue="Yearly"
        handleToggle={(isMonthly) =>
          isMonthly ? setBilling("MONTHLY") : setBilling("YEARLY")
        }
      />
    </>
  );
}
