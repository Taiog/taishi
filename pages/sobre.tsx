import { Title } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import Tai from '../assets/Tai.png';
import QuemSomos from '../assets/quemSomos2.jpg';
import CpSection from '../src/components/Section/CpSection';
import styles from '../styles/Sobre.module.scss';

const Sobre: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          <FormattedMessage id="header.about" />
        </title>
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
        <CpSection
          imageSrc={QuemSomos}
          imageStyle={{
            height: '400px',
          }}
          style={{
            backgroundColor: '#038C4C',
          }}
          text="sobre.quemSomos"
        />
        <CpSection imageSrc={Tai} inverted text="sobre.quemSomos2" />
      </main>
    </>
  );
};

export default Sobre;
