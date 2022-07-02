import React from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const Missions = () => {
  return (
    <Flex className="h-[232px] ml-8 mr-4 my-4 bg-[#CBD5E0] rounded-2xl flex-col drop-shadow-md">
      <div className="bg-[#ED8936] absolute right-[-8px] top-[-8px] h-[24px] w-[24px] rounded-full text-center text-white">
        1
      </div>
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
        <Link href="/mission/enrol/anonymous" passHref>
          <Button colorScheme={"primary"} className="bp mr-[20px]">
            登錄
          </Button>
          {/* <button className="w-[64px] h-[40px] text-white font-bold bg-[#2b6cb0] rounded-md mr-[10px] ">
            登錄
          </button> */}
        </Link>
      </Flex>
    </Flex>
  );
};

export default Missions;
