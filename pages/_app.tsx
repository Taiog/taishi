import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import CpFooter from '../components/Footer/CpFooter';
import CpHeader from '../components/Header/CpHeader';
import '../styles/globals.css';

enum SupportedLocales {
  en = 'en',
  pt = 'pt',
  jp = 'jp',
}

const loadMessages = (locale: SupportedLocales) => {
  switch (locale) {
    case 'en':
      return import('../lang/en-US.json');
    case 'jp':
      return import('../lang/jp.json');
    case 'pt':
      return import('../lang/pt.json');
    default:
      return import('../lang/jp.json');
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  const [messages, setMessages] = useState<any>(null);
  const [locale, setLocale] = useState(SupportedLocales.en);

  useEffect(() => {
    loadMessages(locale).then((fetchedMessages) =>
      setMessages(fetchedMessages)
    );
  }, [locale]);

  return (
    <IntlProvider
      defaultLocale={SupportedLocales.pt}
      locale={locale}
      messages={messages}
    >
      <CpHeader />
      <Component {...pageProps} />
      <CpFooter />
    </IntlProvider>
  );
}

export default MyApp;
