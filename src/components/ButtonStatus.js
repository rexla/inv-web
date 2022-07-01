import React from "react";
import { Flex } from "@chakra-ui/react";

const ButtonStatus = () => {
  return (
    <Flex className="bg-[#2b6cb0] h-[40px] w-[40px] rounded-md drop-shadow-none">
      <div className="bg-[#ED8936] absolute right-[-8px] top-[-8px] h-[24px] w-[24px] rounded-full text-center text-white">
        2
      </div>
    </Flex>
  );
};

export default ButtonStatus;
