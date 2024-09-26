import { Check, X } from "lucide-react";
import React, { useState } from "react";

type Variant = "neutral" | "right" | "wrong" | "disabled";
type Selected = "neutral" | "right" | "wrong";

interface RadioButtonProps {
  variant: Variant;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ variant, label }) => {
  const [selected, setSelected] = useState(false);

  // Define styles based on the variant
  const variantStyles = {
    neutral: "bg-gray-100 text-gray-500 hover:bg-gray-200",
    right: "bg-green-100 text-green-500 hover:bg-green-200",
    wrong: "bg-red-100 text-red-500 hover:bg-red-200",
  };

  const selectedStyles = {
    neutral: "font-medium text-sm bg-[#F2F2F7] text-black p-4 rounded-lg",
    right: "bg-green-100 rounded-lg p-4",
    wrong: "bg-red-100 p-4 rounded-lg",
    disabled: "p-4 rounded-lg hover:bg-[#F2F2F7] opacity-50",
  };

  const selectedRadioStyles = {
    neutral: "accent-pink-500",
    right: "accent-green-500",
    wrong: "accent-pink-500",
    disabled: "accent-black opacity-100",
  };

  const handleClick = () => {
    setSelected(true);
  };

  return (
    <div
      className={`flex items-center  cursor-pointer  ${selectedStyles[variant]}`}
      onClick={handleClick}
    >
      {variant === "disabled" && (
        <input
          type="radio"
          disabled
          checked={selected}
          onChange={() => {}}
          className={`mr-4 w-5 h-5 rounded-full  ${selectedRadioStyles[variant]}`} // Radio button styling
        />
      )}

      {variant === "right" && (
        <div className="w-5 h-5 mr-5 bg-green-500 rounded-md flex items-center justify-center  rotate-45">
          <Check className="w-4 h-4 text-white rotate-[-45deg] " />
        </div>
      )}

      {variant === "wrong" && (
        <div className="w-5 h-5 mr-5 bg-red-500 rounded-md flex items-center justify-center  rotate-45">
          <X className="w-4 h-4 text-white rotate-[-45deg] " />
        </div>
      )}

      <span className="font-medium text-sm text-black">{label}</span>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col gap-2">
      <RadioButton variant="neutral" label="0.05" />
      <RadioButton variant="disabled" label="0.02" />
      <RadioButton variant="wrong" label="1" />
      <RadioButton variant="right" label="3" />
      {/* <RadioButton variant="right" label="Right Option" /> */}
      {/* <RadioButton variant="wrong" label="Wrong Option" /> */}
    </div>
  );
};

export default App;
