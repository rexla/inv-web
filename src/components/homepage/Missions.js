import React from "react";
import { useRouter } from "next/router";
import { Box, Text, Flex, Button, Switch } from "@chakra-ui/react";

const Missions = ({ mission }) => {
  const router = useRouter();
  return (
    <Flex className="h-[232px] ml-8 mr-4 my-4 bg-[#CBD5E0] rounded-2xl flex-col drop-shadow-md">
      <Flex className="h-[144px] bg-[#CBD5E0] rounded-t-2xl"></Flex>
      <Flex className="h-[88px] bg-white rounded-b-2xl items-center justify-between">
        <Flex className="flex-col ml-[20px] my-[12px]">
          <Text color={"#2D3748"} className="font-bold text-2xl">
            多喝水集瓶趣
          </Text>
          <Text color={"#2B6CB0"} className="text-sm">
            登錄抽SYM VEGA125 CBS2.0機車
          </Text>
        </Flex>
        <Button
          colorScheme="blue"
          marginRight={"20px"}
          onClick={() => {
            router.replace("/mission/enrol/anonymous");
          }}
        >
          登錄
        </Button>
      </Flex>
    </Flex>
  );
};

export default Missions;
