import { Group, Menu, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import styles from './CpHeader.module.scss';

const CpLangMenu: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Menu
      control={
        <button className={styles.menuPressable}>
          {isOpen ? (
            <>
              <Group
                style={{
                  gap: '2px',
                }}
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
                <MdOutlineKeyboardArrowUp size={30} />
              </Group>
            </>
          ) : (
            <>
              <Group
                style={{
                  gap: '2px',
                }}
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
                <MdOutlineKeyboardArrowDown size={30} />
              </Group>
            </>
          )}
        </button>
      }
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      opened={isOpen}
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0.5em',
      }}
      transitionDuration={200}
      transitionTimingFunction="ease"
    >
      <Group>
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
      <Group>
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
      <Group>
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
