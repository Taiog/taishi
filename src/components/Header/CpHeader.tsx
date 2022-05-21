import { Group, Menu, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../../assets/taishi.svg';
import styles from './CpHeader.module.scss';
import CpLangMenu from './CpLangMenu';

const menuOptions = [
  {
    href: '/',
    label: 'Início',
  },
  {
    href: '/about',
    label: 'Quem somos',
  },
  {
    href: '/services',
    label: 'Serviços',
  },
  {
    href: '/light-steel-frame',
    label: 'Light Steel Frame',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/contato',
    label: 'Contato',
  },
];

const CpHeader: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.header}>
      <div>
        <Image height={100} src={Logo} width={100} />
      </div>
      <div>
        <Group>
          <CpLangMenu />
          <Menu
            control={
              <button className={styles.menuPressable}>
                {isOpen ? (
                  <AiOutlineClose className={styles.menu} size={40} />
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
                  <Text size="lg">{option.label}</Text>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Group>
      </div>
    </nav>
  );
};

export default CpHeader;
