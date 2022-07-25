import { Container, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import Image0 from "../assets/lsf/0.jpg";
import Image1 from "../assets/lsf/1.jpg";
import Image2 from "../assets/lsf/2.jpg";
import Image3 from "../assets/lsf/3.jpg";
import Image4 from "../assets/lsf/4.jpg";
import Image5 from "../assets/lsf/5.jpg";
import Image6 from "../assets/lsf/6.jpg";
import CpImageWithCaption from "../src/components/ImageWithCaption/CpImageWithCaption";

import styles from "../styles/Lsf.module.scss";

const Lsf: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>Taishi LSF | {formatMessage({ id: "header.lsf" })}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <Container
          size="xl"
          style={{
            padding: "2rem",
          }}
        >
          <Title
            align="center"
            order={2}
            style={{
              fontSize: "2.5rem",
              textTransform: "uppercase",
              fontFamily: "Montserrat",
            }}
          >
            <FormattedMessage id="header.lsf" />
          </Title>
          <Title order={3}>
            <FormattedMessage id="lsf.title1" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text1.1" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text1.2" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text1.3" />
          </Text>
          <CpImageWithCaption
            src={Image0}
            text={formatMessage({ id: "lsf.image1" })}
          />
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text1.4" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text1.5" />
          </Text>
          <CpImageWithCaption
            src={Image1}
            text={formatMessage({ id: "lsf.image2" })}
          />
          <Title order={3}>
            <FormattedMessage id="lsf.title2" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text2.1" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text2.2" />
          </Text>
          <CpImageWithCaption
            src={Image2}
            text={formatMessage({ id: "lsf.image3" })}
          />
          <Title order={3}>
            <FormattedMessage id="lsf.title3" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text3.1" />
          </Text>
          <Title order={3}>
            <FormattedMessage id="lsf.title4" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text4.1" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text4.2" />
          </Text>
          <CpImageWithCaption
            src={Image3}
            text={formatMessage({ id: "lsf.image4" })}
          />
          <Title order={3}>
            <FormattedMessage id="lsf.title5" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text5.1" />
          </Text>
          <CpImageWithCaption
            src={Image4}
            text={formatMessage({ id: "lsf.image5" })}
          />
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text5.2" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text5.3" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text5.4" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text5.5" />
          </Text>
          <Title order={3}>
            <FormattedMessage id="lsf.title6" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text6.1" />
          </Text>
          <CpImageWithCaption
            src={Image5}
            text={formatMessage({ id: "lsf.image6" })}
            upperText={formatMessage({ id: "lsf.laje.seca" })}
          />
          <CpImageWithCaption
            src={Image6}
            text={formatMessage({ id: "lsf.image7" })}
            upperText={formatMessage({ id: "lsf.laje.umida" })}
          />
          <Title order={3}>
            <FormattedMessage id="lsf.title7" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text7.1" />
          </Text>
          <Title order={3}>
            <FormattedMessage id="lsf.title8" />
          </Title>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text8.1" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.text8.2" />
          </Text>
          <Text className={styles.paragraph}>
            <FormattedMessage id="lsf.title9" />:
          </Text>
          <Text className={styles.paragraph}>
            ________. NBR 15253 – Perfis de aço formados a frio, com
            revestimento metálico, para painéis reticulados em edificações:
            Requisitos Gerais. Rio de Janeiro: 2014.
          </Text>
          <Text className={styles.paragraph}>
            BARROS, V. V. B. Estruturas em light steel framing: projeto e
            dimensionamento em softwares 3D. Uberlândia/MG: 2017.
          </Text>
          <Text className={styles.paragraph}>
            FREITAS, A. M. S; CRASTRO. R. C. M de; SANTIAGO, A. K. Manual de
            construção em aço – steel framing: arquitetura. Belo Horizonte:
            CBCA, 2012.
          </Text>
          <Text className={styles.paragraph}>
            MANUAL DE PROCEDIMIENTO construcción con steel framing. Buenos
            Aires: Consul Steel, 2002.
          </Text>
          <Text className={styles.paragraph}>
            NEIVA, Sávio. Sociedade do aço. Cotia, São Paulo, 2020.
          </Text>
          <Text className={styles.paragraph}>
            RODRIGUES, F. C. Manual de construção em aço: steel framing. 2016.
          </Text>
          <Text className={styles.paragraph}>
            WALSYWA. Catálogo 2020. Disponível em:
            https://www.walsywa.com.br/wpcontent/uploads/2020/05/2193_Catalogo_Walsywa_Completo_02c_compressed.pdf.
          </Text>
        </Container>
      </main>
    </>
  );
};

export default Lsf;
