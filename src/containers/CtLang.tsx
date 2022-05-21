import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import IntlContext from '../contexts/useIntl';

export enum SupportedLocales {
  en = 'us',
  pt = 'br',
  jp = 'jp',
}

const loadMessages = (locale: SupportedLocales) => {
  switch (locale) {
    case 'br':
      return import('../../lang/br.json');
    case 'jp':
      return import('../../lang/jp.json');
    case 'us':
      return import('../../lang/us.json');
    default:
      return import('../../lang/jp.json');
  }
};

interface CtLangProps {
  children: React.ReactNode;
}

const CtLang: NextPage<CtLangProps> = ({ children }) => {
  const [messages, setMessages] = useState<any>(null);
  const [locale, setLocale] = useState(SupportedLocales.en);

  useEffect(() => {
    loadMessages(locale).then((fetchedMessages) =>
      setMessages(fetchedMessages)
    );
  }, [locale]);

  const handleChangeLocale = (newLocale: SupportedLocales) => {
    setLocale(newLocale);
  };

  return (
    <IntlContext.Provider
      value={{ locale, setLocale: handleChangeLocale }}
    >
      <IntlProvider
        defaultLocale={SupportedLocales.pt}
        locale={locale}
        messages={messages}
      >
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
};

export default CtLang;
