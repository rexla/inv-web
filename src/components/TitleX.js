import React from "react";
import { Flex } from "@chakra-ui/react";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";

const TitleX = ({ text }) => {
  return (
    <Flex className="w-full py-[20px] bg-[#2B6CB0] items-center text-xl text-white font-bold">
      <Flex ml="40%">{text}</Flex>
      <Link href="/">
        <ClearIcon className="text-white ml-24 cursor-pointer" />
      </Link>
    </Flex>
  );
};

export default TitleX;
