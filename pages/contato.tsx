import {
  Box,
  Button,
  Container,
  Modal,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "../styles/Contato.module.scss";

const Contato: NextPage = () => {
  const { formatMessage } = useIntl();
  const [isBusy, setIsBusy] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm({
    initialValues: {
      city: "",
      email: "",
      message: "",
      name: "",
      phone: "",
      subject: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    try {
      const apiUrl = process.env.API_URL || "https://taishiapi.herokuapp.com";
      axios.post(`${apiUrl}/mail`, values);

      setIsBusy(true);
      setTimeout(() => {
        setIsBusy(false);
        setIsModalOpen(true);
      }, 2000);
    } catch (err) {
      return;
    }
  });

  return (
    <>
      <Head>
        <title>Taishi LSF | {formatMessage({ id: "header.contact" })}</title>
        <meta content="Contato Taishi Light Steel Frame" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Modal
        centered
        onClose={() => setIsModalOpen(false)}
        opened={isModalOpen}
        withCloseButton={false}
      >
        <Box
          sx={{
            padding: 5,
          }}
        >
          <Text size="lg">
            <FormattedMessage id="contact.modal" />
          </Text>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 5,
              marginTop: 25,
            }}
          >
            <Button
              onClick={() => setIsModalOpen(false)}
              radius="xs"
              size="md"
              style={{
                backgroundColor: "#038C4C",
              }}
              uppercase
            >
              <FormattedMessage id="contact.modal.button" />
            </Button>
          </Box>
        </Box>
      </Modal>

      <main className={styles.main}>
        <Container className={styles.container}>
          <Title
            order={1}
            style={{
              paddingBottom: "10px",
            }}
          >
            <FormattedMessage id="header.contact" />
          </Title>
          <form onSubmit={handleSubmit}>
            <TextInput
              className={styles.input}
              label={formatMessage({ id: "contact.name" })}
              placeholder={formatMessage({
                id: "contact.placeholder.name",
              })}
              radius="xs"
              required
              size="lg"
              {...form.getInputProps("name")}
            />
            <TextInput
              className={styles.input}
              label={formatMessage({ id: "contact.email" })}
              placeholder={formatMessage({
                id: "contact.placeholder.email",
              })}
              radius="xs"
              required
              size="lg"
              {...form.getInputProps("email")}
            />
            <TextInput
              className={styles.input}
              label={formatMessage({ id: "contact.phone" })}
              placeholder={formatMessage({
                id: "contact.placeholder.phone",
              })}
              radius="xs"
              size="lg"
              {...form.getInputProps("phone")}
            />
            <TextInput
              className={styles.input}
              label={formatMessage({ id: "contact.city" })}
              placeholder={formatMessage({
                id: "contact.placeholder.city",
              })}
              radius="xs"
              size="lg"
              {...form.getInputProps("city")}
            />
            <TextInput
              className={styles.input}
              label={formatMessage({ id: "contact.subject" })}
              placeholder={formatMessage({
                id: "contact.placeholder.subject",
              })}
              radius="xs"
              required
              size="lg"
              {...form.getInputProps("subject")}
            />
            <Textarea
              className={styles.input}
              label={formatMessage({ id: "contact.message" })}
              minRows={5}
              placeholder={formatMessage({
                id: "contact.placeholder.message",
              })}
              radius="xs"
              required
              size="lg"
              {...form.getInputProps("message")}
            />
            <Button
              color="green"
              loading={isBusy}
              radius="xs"
              size="md"
              style={{
                backgroundColor: "#038C4C",
              }}
              type="submit"
              uppercase
            >
              <FormattedMessage id="contact.send" />
            </Button>
          </form>
        </Container>
      </main>
    </>
  );
};

export default Contato;
