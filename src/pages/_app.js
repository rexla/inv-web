import "../../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <Box maxW={"30em"}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Box>
  );
}

export default MyApp;
