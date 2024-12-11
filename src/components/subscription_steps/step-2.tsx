import arcadeIcon from "/assets/images/icon-arcade.svg";
import advancedIcon from "/assets/images/icon-advanced.svg";
import proIcon from "/assets/images/icon-pro.svg";

interface PlanCardProps {
  iconPath: string;
  name: string;
  price: number;
}

function PlanCard(props: PlanCardProps) {
  return (
    <div className="flex">
      <img src={props.iconPath} />
      <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export function Step2() {
  const plans: PlanCardProps[] = [
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
  return (
    <>
      <h2>Hi this is the Step2</h2>
      {plans.map((plan) => {
        return <PlanCard {...plan} />;
      })}
    </>
  );
}
