import { Container, Stack, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { FormattedMessage } from "react-intl";
import Taishi from "../assets/Taishi horizontal pequeno.svg";
import Hero2 from "../assets/quemSomos.jpg";
import CpAdvantagesSection from "../src/components/AdvantagesSection/CpAdvantagesSection";
import CpSection from "../src/components/Section/CpSection";
import styles from "../styles/Home.module.scss";
import CpValue from "../src/components/Values/CpValue";

export interface ValueCardsI {
  mission: boolean;
  values: boolean;
  vision: boolean;
}

const Home: NextPage = () => {
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
          <Stack className={styles.heroStack}>
            <Image
              alt="Texto com logo do Taishi Light Steel Frame"
              height={width < 1100 ? 1000 : 400}
              src={Taishi}
            />
          </Stack>
        </div>
        <CpSection
          imageSrc={Hero2}
          imageStyle={{
            height: "450px",
          }}
          text="home.main"
        />
        <CpValue />
        <section className={styles.accordionSection}>
          <Container>
            <Title
              align="center"
              order={2}
              style={{
                color: "#1A191A",
                marginBottom: "1.5rem",
                fontSize: "2.5rem",
                textTransform: "uppercase",
                fontFamily: "Montserrat",
              }}
            >
              <FormattedMessage id="index.benefits" />
            </Title>
            <CpAdvantagesSection />
            <Stack
              align="center"
              sx={(_) => ({
                paddingTop: 30,
              })}
            ></Stack>
          </Container>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
