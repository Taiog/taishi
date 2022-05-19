import type { AppProps } from 'next/app';
import Head from 'next/head';
import CpFooter from '../components/Footer/CpFooter';
import CpHeader from '../components/Header/CpHeader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CpHeader />
      <Component {...pageProps} />
      <CpFooter />
    </>
  );
}

export default MyApp;
