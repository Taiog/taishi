import { Box, Button, Container, Stack, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FiTarget } from 'react-icons/fi';
import { GiFlagObjective, GiLighthouse } from 'react-icons/gi';

import { useState } from 'react';
import { useIntl } from 'react-intl';
// import Taishi from '../assets/Nome Taishi solo.png';
import Taishi from '../assets/Taishi horizontal pequeno.svg';
import Hero2 from '../assets/lsf.jpg';
import CpAdvantagesSection from '../src/components/AdvantagesSection/CpAdvantagesSection';
import CpSection from '../src/components/Section/CpSection';
import CpValueCard from '../src/components/ValueCard/CpValueCard';
import styles from '../styles/Home.module.scss';

export interface ValueCardsI {
  mission: boolean;
  values: boolean;
  vision: boolean;
}

const Home: NextPage = () => {
  const { formatMessage } = useIntl();
  const { width } = useViewportSize();

  const [valueCards, setValueCards] = useState<ValueCardsI>({
    mission: false,
    values: false,
    vision: false,
  });

  const handleToggleValueCard = (value: keyof ValueCardsI) => {
    setValueCards((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Taishi LSF</title>
        <meta content="Taishi Light Steel Frame" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(./main.jpeg)`,
          }}
        >
          <Stack className={styles.heroStack}>
            <Image
              alt="Texto com logo do Taishi Light Steel Frame"
              height={width < 768 ? 1000 : 400}
              src={Taishi}
            />
          </Stack>
        </div>
        <CpSection imageSrc={Hero2} text="home.main" />
        <section className={styles.valores}>
          <CpValueCard
            icon={<GiFlagObjective size={100} />}
            id="mission"
            onClick={handleToggleValueCard}
            title={formatMessage({
              id: 'missao',
              defaultMessage: 'Missao',
            })}
            toggled={valueCards.mission}
          />
          <CpValueCard
            icon={<GiLighthouse size={100} />}
            id="vision"
            onClick={handleToggleValueCard}
            title={formatMessage({
              id: 'visao',
              defaultMessage: 'Visao',
            })}
            toggled={valueCards.vision}
          />
          <CpValueCard
            icon={<FiTarget size={100} />}
            id="values"
            onClick={handleToggleValueCard}
            title={formatMessage({
              id: 'valores',
              defaultMessage: 'Valores',
            })}
            toggled={valueCards.values}
          />
        </section>
        <section className={styles.accordionSection}>
          <Container>
            <Title
              align="center"
              order={2}
              style={{
                marginBottom: '1.5rem',
                fontSize: '2.5rem',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat',
              }}
            >
              Vantagens
            </Title>
            <CpAdvantagesSection />
            <Stack
              align="center"
              sx={(theme) => ({
                paddingTop: 30,
              })}
            >
              <Button
                size="lg"
                sx={{
                  backgroundColor: '#038C4C',
                  ':hover': {
                    backgroundColor: '#10492F',
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                Saiba mais
              </Button>
            </Stack>
          </Container>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
