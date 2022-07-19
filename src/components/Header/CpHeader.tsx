import { ActionIcon, Button, Group, Menu, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FormattedMessage } from 'react-intl';
import Logo from '../../../assets/logo.svg';
import styles from './CpHeader.module.scss';
import CpLangMenu from './CpLangMenu';

const menuOptions = [
  {
    href: '/',
    label: 'header.home',
  },
  {
    href: '/sobre',
    label: 'header.about',
  },
  // {
  //   disabled: true,
  //   href: '/services',
  //   label: 'header.services',
  // },
  {
    href: '/light-steel-frame',
    label: 'header.lsf',
  },
  // {
  //   disabled: true,
  //   href: '/blog',
  //   label: 'header.blog',
  // },
  {
    href: '/contato',
    label: 'header.contact',
  },
];

const CpHeader: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useViewportSize();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.header}>
      {width <= 768 && (
        <Group>
          <Link href="https://wa.me/message/CVLAWG4BTN23L1" passHref>
            <a target="_blank">
              <ActionIcon variant="hover">
                <FaWhatsapp fill="#038C4C" size={25} />
              </ActionIcon>
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/taishilsf.engenharia/"
            passHref
          >
            <a target="_blank">
              <ActionIcon variant="hover">
                <FaInstagram fill="#038C4C" size={25} />
              </ActionIcon>
            </a>
          </Link>
        </Group>
      )}
      <Group className={styles.headerContainer}>
        {width <= 768 ? (
          <div className={styles.logo}>
            <Link href="/">
              <Image
                alt="Logo da empresa, um T de Taishi"
                height={100}
                src={Logo}
                width={100}
              />
            </Link>
          </div>
        ) : (
          <div className={styles.logo}>
            <Link href="/">
              <Image
                alt="Logo da empresa, um T de Taishi"
                height={100}
                src={Logo}
                width={100}
              />
            </Link>
          </div>
        )}
        <div />
        {width >= 768 && (
          <Group className={styles.navMenu} position="center">
            {menuOptions.map((option) => (
              <Link href={option.href} key={option.href}>
                <Button
                  color="teal"
                  radius="sm"
                  size="lg"
                  style={{
                    fontFamily: 'Roboto',
                    color: '#038C4C',
                    fontWeight: '600',
                  }}
                  variant="subtle"
                >
                  <FormattedMessage id={option.label} />
                </Button>
              </Link>
            ))}
          </Group>
        )}
        <div>
          <Group>
            <Group className={styles.iconsDesktop}>
              <Link
                href="https://wa.me/message/CVLAWG4BTN23L1"
                passHref
              >
                <a target="_blank">
                  <ActionIcon variant="hover">
                    <FaWhatsapp fill="#038C4C" size={25} />
                  </ActionIcon>
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/taishilsf.engenharia/"
                passHref
              >
                <a target="_blank">
                  <ActionIcon variant="hover">
                    <FaInstagram fill="#038C4C" size={25} />
                  </ActionIcon>
                </a>
              </Link>
            </Group>
            <CpLangMenu />
            {width < 768 && (
              <Menu
                control={
                  <button className={styles.menuPressable}>
                    {isOpen ? (
                      <AiOutlineClose
                        className={styles.menu}
                        size={40}
                      />
                    ) : (
                      <GiHamburgerMenu
                        className={styles.menu}
                        size={40}
                      />
                    )}
                  </button>
                }
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                opened={isOpen}
                transitionDuration={200}
                transitionTimingFunction="ease"
              >
                {menuOptions.map((option) => (
                  <Menu.Item key={option.label}>
                    <Link href={option.href}>
                      <Text
                        size="lg"
                        style={{
                          fontFamily: 'Montserrat',
                        }}
                      >
                        <FormattedMessage id={option.label} />
                      </Text>
                    </Link>
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </Group>
        </div>
      </Group>
    </nav>
  );
};

export default CpHeader;
