import type { NextPage } from "next";
import { useIntl } from "react-intl";
import styles from "./CpValue.module.scss";
import { FiTarget } from "react-icons/fi";
import { GiFlagObjective, GiLighthouse } from "react-icons/gi";
import CpValueCard from "../ValueCard/CpValueCard";
import { useState } from "react";

export interface ValueCardsI {
  mission: boolean;
  values: boolean;
  vision: boolean;
}

const CpValue: NextPage = () => {
  const { formatMessage } = useIntl();

  const [valueCards, setValueCards] = useState<ValueCardsI>({
    mission: false,
    values: false,
    vision: false,
  });

  const handleToggleValueCard = (value: keyof ValueCardsI) => {
    setValueCards((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  return (
    <section className={styles.valores}>
      <CpValueCard
        icon={<GiFlagObjective size={100} />}
        id="mission"
        onClick={handleToggleValueCard}
        title={formatMessage({
          id: "missao",
          defaultMessage: "Missao",
        })}
        toggled={valueCards.mission}
      />
      <CpValueCard
        icon={<GiLighthouse size={100} />}
        id="vision"
        onClick={handleToggleValueCard}
        title={formatMessage({
          id: "visao",
          defaultMessage: "Visao",
        })}
        toggled={valueCards.vision}
      />
      <CpValueCard
        icon={<FiTarget size={100} />}
        id="values"
        onClick={handleToggleValueCard}
        title={formatMessage({
          id: "valores",
          defaultMessage: "Valores",
        })}
        toggled={valueCards.values}
      />
    </section>
  );
};

export default CpValue;
