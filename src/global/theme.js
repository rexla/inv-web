import Colors from "./Colors";
import Sizes from "./Sizes";
import { extendTheme } from "@chakra-ui/react";

const colors = { ...Colors };
const sizes = { ...Sizes };
const theme = extendTheme({
  colors,
  sizes,
});

export default theme;
