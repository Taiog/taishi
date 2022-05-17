import type { AppProps } from 'next/app';
import Head from 'next/head';
import CpHeader from '../components/Header/CpHeader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CpHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
