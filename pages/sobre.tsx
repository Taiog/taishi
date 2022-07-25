import { Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Tai from "../assets/Tai.png";
import QuemSomos from "../assets/quemSomos2.jpg";
import CpSection from "../src/components/Section/CpSection";
import styles from "../styles/Sobre.module.scss";
import CpValue from "../src/components/Values/CpValue";

const Sobre: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>Taishi LSF | {formatMessage({ id: "header.about" })}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        {/* <Title
          order={1}
          style={{
            paddingBottom: '10px',
          }}
        >
          <FormattedMessage id="header.about" />
        </Title> */}
        <Title
          align="center"
          order={2}
          style={{
            paddingTop: "1.5rem",
            backgroundColor: "#f2f2f2",
            fontSize: "2.5rem",
            textTransform: "uppercase",
            fontFamily: "Montserrat",
          }}
        >
          <FormattedMessage id="sobre.titulo" />
        </Title>
        <CpSection imageSrc={Tai} inverted text="sobre.quemSomos2" />
        <CpSection
          imageSrc={QuemSomos}
          imageStyle={{
            height: "400px",
          }}
          style={{
            backgroundColor: "#038C4C",
          }}
          text="sobre.quemSomos"
        />
        <CpValue />
      </main>
    </>
  );
};

export default Sobre;
