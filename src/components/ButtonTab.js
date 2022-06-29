import React from "react";
import { useTab } from "@chakra-ui/react";

const ButtonTab = React.forwardRef((props, ref) => {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  return (
    <button
      {...tabProps}
      className={`w-[96px] h-[40px] rounded-full mr-[8px] ${
        isSelected
          ? "bg-white"
          : "border-white border-solid border-[1px] bg-[#2B6CB0]"
      }`}
    >
      <p
        className={`text-base font-semibold ${
          isSelected ? "text-[#2B6CB0]" : "text-white"
        } `}
      >
        {tabProps.children}
      </p>
    </button>
  );
});

export default ButtonTab;
