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
    <div className="flex">
      <img src={props.iconPath} />
      <div>
        <p>{props.name}</p>
        <p>{props.billing === "MONTHLY" ? props.price : props.price * 10}</p>
      </div>
    </div>
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
      <h2>Hi this is the Step2</h2>
      {plans.map((plan) => {
        return <PlanCard {...plan} billing={billing} />;
      })}
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
