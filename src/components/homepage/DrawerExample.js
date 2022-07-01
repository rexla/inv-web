import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import Burger from "./Burger";
import ButtonStatus from "../ButtonStatus";

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {/* <ButtonStatus /> */}
      {/* <div className="rounded-md bg-[#2b6cb0]">
        <button
          ref={btnRef}
          onClick={onOpen}
          className="h-[40px] w-[40px] text-2xl text-white"
        >
          +
        </button>
      </div> */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Burger />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerExample;
