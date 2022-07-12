import {
  Button,
  Container,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from '../styles/Contato.module.scss';

const Contato: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>{formatMessage({ id: 'header.contact' })}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <Container className={styles.container}>
          <Title
            order={1}
            style={{
              paddingBottom: '10px',
            }}
          >
            <FormattedMessage id="header.contact" />
          </Title>
          <TextInput
            className={styles.input}
            label={formatMessage({ id: 'contact.name' })}
            placeholder={formatMessage({
              id: 'contact.placeholder.name',
            })}
            radius="xs"
            required
            size="lg"
          />
          <TextInput
            className={styles.input}
            label={formatMessage({ id: 'contact.email' })}
            placeholder={formatMessage({
              id: 'contact.placeholder.email',
            })}
            radius="xs"
            required
            size="lg"
          />
          <TextInput
            className={styles.input}
            label={formatMessage({ id: 'contact.phone' })}
            placeholder={formatMessage({
              id: 'contact.placeholder.phone',
            })}
            radius="xs"
            size="lg"
          />
          <TextInput
            className={styles.input}
            label={formatMessage({ id: 'contact.city' })}
            placeholder={formatMessage({
              id: 'contact.placeholder.city',
            })}
            radius="xs"
            size="lg"
          />
          <TextInput
            className={styles.input}
            label={formatMessage({ id: 'contact.subject' })}
            placeholder={formatMessage({
              id: 'contact.placeholder.subject',
            })}
            radius="xs"
            required
            size="lg"
          />
          <Textarea
            className={styles.input}
            label={formatMessage({ id: 'contact.message' })}
            minRows={5}
            placeholder={formatMessage({
              id: 'contact.placeholder.message',
            })}
            radius="xs"
            required
            size="lg"
          />
          <Button
            color="green"
            radius="xs"
            size="md"
            style={{
              backgroundColor: '#038C4C',
            }}
            uppercase
          >
            <FormattedMessage id="contact.send" />
          </Button>
        </Container>
      </main>
    </>
  );
};

export default Contato;
