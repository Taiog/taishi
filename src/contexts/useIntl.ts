import React, { Dispatch, SetStateAction } from 'react';
import { SupportedLocales } from '../containers/CtLang';

interface IntlContextInterface {
  locale: string;
  setLocale: (locale: SupportedLocales) => void;
}

const IntlContext = React.createContext<IntlContextInterface>({
  locale: 'pt',
  setLocale: () => {},
});

export default IntlContext;
