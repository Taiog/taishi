import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import IntlContext from '../contexts/useIntl';

export enum SupportedLocales {
  en = 'us',
  pt = 'br',
  jp = 'jp',
}

const loadMessages = async (locale: SupportedLocales) => {
  switch (locale) {
    case 'br':
      return await import('../../lang/br.json');
    case 'jp':
      return await import('../../lang/jp.json');
    case 'us':
      return await import('../../lang/us.json');
    default:
      return await import('../../lang/jp.json');
  }
};

interface CtLangProps {
  children: React.ReactNode;
}

interface Message {
  [key: string]: string;
}

const CtLang: NextPage<CtLangProps> = ({ children }) => {
  const [messages, setMessages] = useState<null | Message>(null);
  const [locale, setLocale] = useState(SupportedLocales.pt);

  useEffect(() => {
    loadMessages(locale).then((fetchedMessages) => {
      setMessages(fetchedMessages.default);
    });
  }, [locale]);

  const handleChangeLocale = (newLocale: SupportedLocales) => {
    setLocale(newLocale);
  };

  if (!messages) {
    return null;
  }

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
