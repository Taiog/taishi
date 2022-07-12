import {
  ActionIcon,
  Button,
  Container,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaRegEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import Logo from '../../../assets/logoFooter.svg';
import styles from './CpFooter.module.scss';

const CpFooter: NextPage = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container className={styles.footer} size="lg">
        <div className={styles.imageContainer}>
          <Image
            alt="Logo da empresa, um T de Taishi"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src={Logo}
            width="100%"
          />
        </div>
        <div className={styles.mapAndAddress}>
          <div className="map">
            <iframe
              height="300px"
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.949883783996!2d-37.072229549999996!3d-10.926502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa3621199dc288f0a!2sTaishi%20Light%20Steel%20Frame!5e0!3m2!1spt-BR!2sbr!4v1654455546925!5m2!1spt-BR!2sbr"
              style={{
                border: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            ></iframe>
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
              <Link
                href="https://wa.me/message/CVLAWG4BTN23L1"
                passHref
              >
                <a className={styles.icon} target="_blank">
                  <ActionIcon variant="transparent">
                    <FaWhatsapp fill="#038C4C" size={25} />
                  </ActionIcon>
                  <Text className={styles.iconText}>
                    79 9 9801-1151
                  </Text>
                </a>
              </Link>
              <Space w="md" />
              79 3025-3003
            </Text>
            <Text className={styles.addressText}>
              <a
                className={styles.icon}
                href="mailto:contato@taishilsf.com.br"
              >
                <ActionIcon variant="transparent">
                  <FaRegEnvelope fill="#038C4C" size={25} />
                </ActionIcon>
                <Text className={styles.iconText}>
                  contato@taishilsf.com.br
                </Text>
              </a>
            </Text>
            <Link
              href="https://www.instagram.com/taishilsf.engenharia/"
              passHref
            >
              <a className={styles.icon} target="_blank">
                <ActionIcon variant="transparent">
                  <FaInstagram fill="#038C4C" size={25} />
                </ActionIcon>
                <Text className={styles.iconText}>
                  taishilsf.engenharia
                </Text>
              </a>
            </Link>

            <Text className={styles.addressText}>
              Rua Frei Paulo, 181
              <br></br>
              Aracaju-SE
              <br></br>
              CEP 49015-260
            </Text>
            <Link href="/contato">
              <Button
                className={styles.contact}
                size="lg"
                variant="outline"
              >
                <FormattedMessage id="header.contact" />
              </Button>
            </Link>
          </Stack>
        </div>
      </Container>
    </footer>
  );
};

export default CpFooter;
