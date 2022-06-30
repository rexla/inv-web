import Image from "next/image";
import headerPic from "../../public/images/header.png";
import profilePic from "../../public/images/profile.png";
import { Box, Text, Flex } from "@chakra-ui/react";
import Missions from "../components/homepage/Missions";
import DrawerExample from "../components/homepage/DrawerExample";

export default function Home() {
  return (
    <Box>
      <Box>
        <Image src={headerPic} layout="responsive" />
        <Flex className="items-center mx-[20px] justify-between">
          <Flex className="items-center">
            <Image src={profilePic} />
            <Text className="ml-[10px] text-[#2D3748] font-bold text-[24px]">
              發票登錄活動
            </Text>
          </Flex>
          <Flex className="items-center">
            <Box
              as="button"
              className="rounded-md bg-[#2B6CB0] h-[40px] w-[40px] mr-[16px] text-[white] text-[24px]"
            >
              +
            </Box>
            <DrawerExample />
          </Flex>
        </Flex>
      </Box>
      <Flex direction={"column"}>
        <Missions />
        <Missions />
        <Missions />
        <Missions />
      </Flex>
      <Flex className="h-[30px] justify-center items-center bg-[#DADADA]">
        <Text color={"#4A5568"}>
          本服務由 <span className="font-bold">發票特務 Invoiceman</span> 提供
        </Text>
      </Flex>
    </Box>
  );
}
