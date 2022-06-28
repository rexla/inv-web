import React from "react";
import { CircularProgress, Text, Button, Box } from "@chakra-ui/react";

const Burger = () => {
  const connect = () => {
    console.log("hello");
  };
  return (
    <div className="mx-auto mt-2 text-center">
      <CircularProgress value={80} />
      <Text color="#3182CE">/ABC+123</Text>
      <Text color="#3182CE" fontSize="xs">
        您的載具正常運作中
      </Text>
      <Button colorScheme="blue" my="4" mx="auto">
        同步
      </Button>
      <div className="flex flex-col border-y-[1px]">
        <Box
          as="button"
          className="mx-auto my-[16px] font-bold"
          onClick={connect}
        >
          符合發票
        </Box>
        <div className="border-y-[1px]">
          <Box
            as="button"
            className="mx-auto my-[16px] font-bold"
            onClick={connect}
          >
            領獎資料
          </Box>
        </div>
        <Box
          as="button"
          className="mx-auto my-[16px] font-bold"
          onClick={connect}
        >
          登出
        </Box>
      </div>
    </div>
  );
};

export default Burger;
