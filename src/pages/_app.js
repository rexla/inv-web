import "../../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../global/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Box maxW={"30em"}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Box>
  );
}

export default MyApp;
