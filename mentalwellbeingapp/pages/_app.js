import Navbar from "../components/navbar";
import AuthContextProvider from "../context/authContext";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/signIn"
      ? false
      : true && router.pathname === "/signUp"
      ? false
      : true;

  return (
    <ChakraProvider>
      <AuthContextProvider>
        {showHeader && <Navbar />}
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
