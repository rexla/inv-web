import React from "react";
import {
  Flex,
  VStack,
  Center,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import Award from "../../../components/mission/Award";
import TitleX from "../../../components/TitleX";
import TitleArrow from "../../../components/TitleArrow";
import ButtonTab from "../../../components/ButtonTab";

const anonymous = () => {
  return (
    <Flex className="flex-col">
      <Box className="bg-[#2B6CB0]">
        <TitleX text="登錄發票" />
        <Tabs>
          <TabList className="pb-[12px] bg-[#2B6CB0] pl-[24px] pt-1">
            <ButtonTab>登錄發票</ButtonTab>
            <ButtonTab>抽獎歷史</ButtonTab>
          </TabList>

          <TabPanels>
            <TabPanel className="bg-white">
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <TitleArrow text="登錄發票" color="yellow" />
      <TitleArrow text="登錄發票" />
      <Flex className="bg-[#FFCE33] h-[56px] w-full items-center px-[32px] justify-between">
        <Text className="text-xl text-[#37375A] font-bold">
          發票在載具裡嗎？
        </Text>
        <Button>綁定載具</Button>
      </Flex>
      {/* <Award /> */}
      <Button>綁定載具</Button>
    </Flex>
  );
};

export default anonymous;
