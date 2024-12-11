import { useEffect, useState } from "react";

interface ToggleSwitchProps {
  leftValue: string;
  rightValue: string;
  handleToggle: (isLeft: boolean) => void;
}

export function ToggleSwitch({
  leftValue,
  rightValue,
  handleToggle,
}: ToggleSwitchProps) {
  const [isLeft, setIsLeft] = useState(true);

  return (
    <div
      onClick={() => {
        handleToggle(!isLeft);
        setIsLeft(!isLeft);
      }}
      className="flex font-semibold gap-4 cursor-pointer justify-center p-4 bg-slate-100 rounded-sm items-center "
    >
      <p className={isLeft ? "text-blue-950" : "text-gray-400"}>{leftValue}</p>
      <div className="flex items-center relative w-12 h-6 bg-blue-950 rounded-full">
        <span
          className={
            "h-4 w-4 absolute z-10 rounded-full left-1 bg-white transition-all " +
            (isLeft ? "translate-x-0" : "translate-x-6")
          }
        ></span>
      </div>
      <p className={!isLeft ? "text-blue-950" : "text-gray-400"}>
        {rightValue}
      </p>
    </div>
  );
}
