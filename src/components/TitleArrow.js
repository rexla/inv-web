import React from "react";
import { Flex } from "@chakra-ui/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TitleX = ({ text, color }) => {
  let bgColor = "bg-[#2B6CB0]";
  let textColor = "text-white";
  if (color === "yellow") {
    bgColor = "bg-[#FFCE33]";
    textColor = "text-[#37375A]";
  }
  return (
    <Flex
      className={`w-full py-[20px] ${bgColor} items-center justify-center text-xl ${textColor} font-bold`}
    >
      {text}
      <ArrowBackIcon
        className={`${textColor} fixed left-8`}
        // onClick={() => {
        //   router.push({ pathname: "/" });
        // }}
      />
    </Flex>
  );
};

export default TitleX;
