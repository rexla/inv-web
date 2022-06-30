import React from "react";
import { CircularProgress, Text, Button } from "@chakra-ui/react";

const Burger = () => {
  return (
    <div className="mx-auto text-center mt-10">
      <CircularProgress value={80} />
      <Text color="#3182CE">/ABC+123</Text>
      <Text color="#3182CE" fontSize="xs">
        您的載具正常運作中
      </Text>
      <Button colorScheme="blue" my="4" mx="auto">
        同步
      </Button>
      <div className="flex flex-col border-y-[1px]">
        <Button colorScheme={"white"} color="black" my="8px">
          符合發票
        </Button>
        <hr />
        <Button colorScheme={"white"} color="black" my="8px">
          領獎資料
        </Button>
        <hr />
        <Button colorScheme={"white"} color="black" my="8px">
          登出
        </Button>
      </div>
    </div>
  );
};

export default Burger;
