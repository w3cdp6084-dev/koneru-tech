import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';
import '../styles/globals.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
