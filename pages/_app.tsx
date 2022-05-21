import type { AppProps } from 'next/app';
import CpFooter from '../src/components/Footer/CpFooter';
import CpHeader from '../src/components/Header/CpHeader';
import CtLang from '../src/containers/CtLang';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CtLang>
        <CpHeader />
        <Component {...pageProps} />
        <CpFooter />
      </CtLang>
    </>
  );
}

export default MyApp;
