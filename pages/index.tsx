import { Button, Container, Stack, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FiTarget } from 'react-icons/fi';
import { GiFlagObjective, GiLighthouse } from 'react-icons/gi';

import { useIntl } from 'react-intl';
import Hero2 from '../assets/lsf.jpg';
import Taishi from '../assets/taishi-text.svg';
import CpAdvantagesSection from '../src/components/AdvantagesSection/CpAdvantagesSection';
import CpSection from '../src/components/Section/CpSection';
import CpValueCard from '../src/components/ValueCard/CpValueCard';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const { formatMessage } = useIntl();
  const { width } = useViewportSize();

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
          <div className={styles.title}>
            <div className={styles.taishiTitle}>
              <Image
                alt="Random unsplash image"
                height={width < 768 ? 800 : 170}
                src={Taishi}
              />
            </div>
          </div>
          <div className={styles.hero}>
            <Title className={styles.lsfText} order={1}>
              Light Steel Frame
            </Title>
          </div>
        </div>
        <CpSection imageSrc={Hero2} text="home.main" />
        <section className={styles.valores}>
          <CpValueCard
            icon={<GiFlagObjective size={100} />}
            title={formatMessage({
              id: 'missao',
              defaultMessage: 'Missao',
            })}
          />
          <CpValueCard
            icon={<GiLighthouse size={100} />}
            title={formatMessage({
              id: 'visao',
              defaultMessage: 'Visao',
            })}
          />
          <CpValueCard
            icon={<FiTarget size={100} />}
            title={formatMessage({
              id: 'valores',
              defaultMessage: 'Valores',
            })}
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
