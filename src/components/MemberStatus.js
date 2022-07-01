import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const MemberStatus = () => {
  return (
    <Flex className="items-center justify-around py-[8px] bg-[#4299E1]">
      <Text className="text-white">成功連接您的載具</Text>
      <Box as="button" className="bg-white text-[#4299E1] w-[80px] h-[32px]">
        同步發票
      </Box>
    </Flex>
  );
};

export default MemberStatus;
