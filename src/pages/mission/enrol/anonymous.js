import React from "react";
import { Flex, VStack, Center } from "@chakra-ui/react";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/router";
import Award from "../../../components/mission/Award";

const anonymous = () => {
  const router = useRouter();
  return (
    <VStack>
      <Flex
        w="full"
        color="white"
        py="20px"
        bg="#2B6CB0"
        fontSize={"20px"}
        fontWeight="bold"
        alignItems={"center"}
        justifyContent={"center"}
      >
        登錄發票
      </Flex>
      <ClearIcon
        color="#FFF"
        className="absolute right-[10%] top-[20%] text-white"
        onClick={() => {
          router.push({ pathname: "/" });
        }}
      />
      {/* <Award /> */}
    </VStack>
  );
};

export default anonymous;
