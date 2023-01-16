import Navbar from '../components/navbar'
import AuthContextProvider from '../context/authContext'
import '../styles/globals.css'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const showHeader = (router.pathname === '/signIn' ? false : true && router.pathname === '/signUp' ? false : true);
  
  return( 
  <AuthContextProvider>
    {showHeader &&
    <Navbar />}
    <Component {...pageProps} />
  </AuthContextProvider>
  )
}

export default MyApp
