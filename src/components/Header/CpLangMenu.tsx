import { Group, Menu, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { SupportedLocales } from '../../containers/CtLang';
import IntlContext from '../../contexts/useIntl';
import styles from './CpLangMenu.module.scss';

const CpLangMenu: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useContext(IntlContext);

  const handleChangeLanguage = (newLocale: SupportedLocales) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Menu
      control={
        <button className={styles.menuPressable}>
          <>
            <Group
              style={{
                gap: '2px',
              }}
            >
              <ReactCountryFlag
                countryCode={locale.toUpperCase()}
                style={{
                  width: '2em',
                  height: '2em',
                }}
                svg
                title={locale.toUpperCase()}
              />
              {isOpen ? (
                <MdOutlineKeyboardArrowUp size={30} />
              ) : (
                <MdOutlineKeyboardArrowDown size={30} />
              )}
            </Group>
          </>
        </button>
      }
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      opened={isOpen}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      transitionDuration={200}
      transitionTimingFunction="ease"
    >
      <Group
        className={styles.menuItem}
        onClick={() => handleChangeLanguage(SupportedLocales.en)}
      >
        <ReactCountryFlag
          countryCode="US"
          style={{
            width: '2em',
            height: '2em',
          }}
          svg
          title="US"
        />
        English
      </Group>
      <Group
        className={styles.menuItem}
        onClick={() => handleChangeLanguage(SupportedLocales.pt)}
      >
        <ReactCountryFlag
          countryCode="BR"
          style={{
            width: '2em',
            height: '2em',
          }}
          svg
          title="BR"
        />
        Português
      </Group>
      <Group
        className={styles.menuItem}
        onClick={() => handleChangeLanguage(SupportedLocales.jp)}
      >
        <ReactCountryFlag
          countryCode="JP"
          style={{
            width: '2em',
            height: '2em',
          }}
          svg
          title="JP"
        />
        日本語
      </Group>
    </Menu>
  );
};

export default CpLangMenu;
