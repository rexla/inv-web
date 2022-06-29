import React from "react";
import { Flex, VStack, Center, Text, Button } from "@chakra-ui/react";
import Award from "../../../components/mission/Award";
import TitleX from "../../../components/TitleX";

const anonymous = () => {
  return (
    <Flex className="flex-col">
      <TitleX text="登錄發票" />
      <Flex className="bg-[#FFCE33] h-[56px] w-full items-center px-[32px] justify-between">
        <Text className="text-xl text-[#37375A] font-bold">
          發票在載具裡嗎？
        </Text>
        <Button colorScheme="blue">綁定載具</Button>
      </Flex>
      {/* <Award /> */}
      <Button colorScheme="blue">綁定載具</Button>
    </Flex>
  );
};

export default anonymous;
