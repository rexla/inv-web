import "../../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box maxW={"30em"}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
