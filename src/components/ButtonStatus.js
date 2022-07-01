import React from "react";
import { Flex } from "@chakra-ui/react";
import OrangeBall from "./OrangeBall";

const ButtonStatus = () => {
  return (
    <Flex className="bg-[#2b6cb0] h-[40px] w-[40px] rounded-md drop-shadow-none">
      <OrangeBall number="4" />
    </Flex>
  );
};

export default ButtonStatus;
