import { Button, Container, Space, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../../../assets/logo.svg';
import styles from './CpFooter.module.scss';

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

const CpFooter: NextPage = () => {
  return (
    <Container
      className={styles.footer}
      style={{
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          height="100%"
          layout="responsive"
          objectFit="contain"
          src={Logo}
          width="100%"
        />
      </div>
      <Stack
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: '1rem 0',
        }}
      >
        <Text className={styles.addressText}>
          79 9 9801-1151
          <Space w="md" />
          79 3025-3003
        </Text>
        <Text className={styles.addressText}>
          contato@taishilsf.com.br
        </Text>
        <Text className={styles.addressText}>
          taishilsf.engenharia
        </Text>
        <Text className={styles.addressText}>
          Rua Frei Paulo, 181
        </Text>
        <Text className={styles.addressText}>Aracaju-SE</Text>
        <Text className={styles.addressText}>CEP 49015-260</Text>
        <Button
          className={styles.contact}
          size="lg"
          variant="outline"
        >
          Contato
        </Button>
      </Stack>
    </Container>
  );
};

export default CpFooter;
