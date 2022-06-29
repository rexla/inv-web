import React from "react";
import { Flex } from "@chakra-ui/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TitleX = ({ text }) => {
  return (
    <Flex className="w-full py-[20px] bg-[#2B6CB0] items-center justify-center text-xl text-white font-bold">
      {text}
      <ArrowBackIcon
        className="text-white fixed left-8"
        // onClick={() => {
        //   router.push({ pathname: "/" });
        // }}
      />
    </Flex>
  );
};

export default TitleX;
