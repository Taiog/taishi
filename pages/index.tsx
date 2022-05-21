import { Title } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FiTarget } from 'react-icons/fi';
import { GiFlagObjective } from 'react-icons/gi';
import { ImEye } from 'react-icons/im';
import { useIntl } from 'react-intl';
import QuemSomos from '../assets/quemSomos.jpg';
import TaishiSolo from '../assets/taishi-text.svg';
import CpValueCard from '../src/components/ValueCard/CpValueCard';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          content="Generated by create next app"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            backgroundImage: `url(./main.jpeg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '50vh',
            width: '100%',
          }}
        >
          <div className={styles.title}>
            <Image height={500} src={TaishiSolo}></Image>
          </div>
          <div className={styles.hero}>Light Steel Frame</div>
        </div>
        <section className={styles.section}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Possimus quidem architecto eligendi suscipit magnam iusto
          consequatur. Facere dicta maxime aperiam corrupti in
          aspernatur, eum, voluptas iure earum dolor laudantium
          eligendi!
        </section>
        <section className={styles.section2}>
          <Image src={QuemSomos}></Image>
          <Title
            order={1}
            style={{
              paddingBottom: '10px',
              paddingTop: '10px',
              textTransform: 'uppercase',
            }}
          >
            Titulo da Section
          </Title>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Possimus quidem architecto eligendi suscipit magnam iusto
            consequatur. Facere dicta maxime aperiam corrupti in
            aspernatur, eum, voluptas iure earum dolor laudantium
            eligendi!
          </span>
        </section>
        <section className={styles.valores}>
          <CpValueCard
            icon={<FiTarget size={100} />}
            title={formatMessage({
              id: 'valores',
              defaultMessage: 'Valores',
            })}
          />
          <CpValueCard
            icon={<GiFlagObjective size={100} />}
            title={formatMessage({
              id: 'missao',
              defaultMessage: 'Missao',
            })}
          />
          <CpValueCard
            icon={<ImEye size={100} />}
            title={formatMessage({
              id: 'visao',
              defaultMessage: 'Visao',
            })}
          />
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
