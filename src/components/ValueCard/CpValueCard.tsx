import { Card, Menu, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import type { NextPage } from "next";
import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { ValueCardsI } from "../../../pages";
import styles from "./CpValueCard.module.scss";

interface CpValueCardProps {
  icon: any;
  id: keyof ValueCardsI;
  text?: string;
  title: string;
  toggled: boolean;
  onClick: (value: keyof ValueCardsI) => void;
}

const CpValueCard: NextPage<CpValueCardProps> = ({
  icon,
  id,
  onClick,
  title,
  toggled,
}) => {
  const { width } = useViewportSize();

  const renderText = useMemo(() => {
    return toggled ? (
      <Text
        className={styles.text}
        style={{
          fontFamily: "Montserrat",
          textAlign: "justify",
          padding: 10,
          overflowY: width > 1100 ? "hidden" : "scroll",
        }}
        weight="400"
      >
        <FormattedMessage id={`valueText.${id}`} />
      </Text>
    ) : (
      <>
        {icon}
        <Text className={styles.cardText} weight="700">
          {title}
        </Text>
      </>
    );
  }, [icon, id, title, toggled, width]);

  return (
    <div className={styles.card}>
      <Card
        className={styles.cardInner}
        id={id}
        onClick={() => onClick(id)}
        p="xl"
        shadow="lg"
        style={{
          boxShadow:
            " 0 1px 3px rgb(0 0 0 / 25%), rgb(0 0 0 / 25%) 0px 28px 23px -7px, rgb(0 0 0 / 4%) 0px 12px 12px -7px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {renderText}
      </Card>
    </div>
  );
};

export default CpValueCard;
