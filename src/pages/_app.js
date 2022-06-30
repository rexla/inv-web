import "../../styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../global/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="30em" p="0">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
