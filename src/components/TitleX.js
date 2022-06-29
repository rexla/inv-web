import React from "react";
import { Flex } from "@chakra-ui/react";
import ClearIcon from "@mui/icons-material/Clear";
import { useRouter } from "next/router";

const TitleX = ({ text }) => {
  const router = useRouter();
  return (
    <Flex className="w-full py-[20px] bg-[#2B6CB0] items-center justify-center text-xl text-white font-bold">
      {text}
      <ClearIcon
        className="text-white fixed right-8"
        onClick={() => {
          router.push({ pathname: "/" });
        }}
      />
    </Flex>
  );
};

export default TitleX;
