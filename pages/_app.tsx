import type { AppProps } from 'next/app';
import '../styles/globals.scss'
import Header from '../components/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
