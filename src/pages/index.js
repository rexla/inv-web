import { useState, useEffect } from "react";
import Image from "next/image";
import headerPic from "../../public/images/header.png";
import profilePic from "../../public/images/profile.png";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Missions from "../components/homepage/Missions";
import Burger from "../components/homepage/Burger";

export default function Home() {
  const [burger, setBurger] = useState(false);

  const show = () => {
    console.log(burger);
  };
  useEffect(() => {
    show();
  }, [burger]);
  return (
    <Box>
      {burger && (
        <Flex justifyContent={"end"}>
          <Box
            w="140px"
            h="full"
            zIndex={16}
            position={"fixed"}
            bg="white"
            className="flex px-2 pt-2 flex-col"
          >
            <Button colorScheme="blue" onClick={() => setBurger(false)}>
              返回
            </Button>
            <Burger />
          </Box>
        </Flex>
      )}
      <Box>
        <Image src={headerPic} layout="responsive" />
        <Flex
          alignItems={"center"}
          position={"absolute"}
          ml={"20px"}
          top={"8%"}
        >
          <Image src={profilePic} />
          <Text
            fontSize="24px"
            fontWeight={"bold"}
            color={"#2D3748"}
            ml={"10px"}
          >
            發票登錄活動
          </Text>
          <Flex ml={"3.5em"}>
            <Box
              as="button"
              borderRadius="md"
              bg="#2B6CB0"
              h="40px"
              w="40px"
              mr="4"
              color="white"
              fontSize="24px"
              onClick={() => {
                setBurger(true);
                show();
              }}
            >
              +
            </Box>
            <Box
              as="button"
              borderRadius="md"
              bg="#2B6CB0"
              h="40px"
              w="40px"
              color="white"
              fontSize="24px"
              onClick={() => {
                setBurger(true);
                show();
              }}
            >
              +
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex direction={"column"}>
        <Missions />
        <Missions />
        <Missions />
        <Missions />
      </Flex>
      <Flex
        bg={"#DADADA"}
        h={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text color={"#4A5568"}>
          本服務由 <span className="font-bold">發票特務 Invoiceman</span> 提供
        </Text>
      </Flex>
    </Box>
  );
}
