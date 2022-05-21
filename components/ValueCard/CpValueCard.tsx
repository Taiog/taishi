import { Card, Menu, Text } from '@mantine/core';
import type { NextPage } from 'next';
import styles from './CpValueCard.module.scss';

interface CpValueCardProps {
  icon: any;
  text?: string;
  title: string;
}

const CpValueCard: NextPage<CpValueCardProps> = ({
  icon,
  text,
  title,
}) => {
  return (
    <div className={styles.card}>
      <Card
        p="xl"
        shadow="lg"
        style={{
          boxShadow:
            ' 0 1px 3px rgb(0 0 0 / 25%), rgb(0 0 0 / 25%) 0px 28px 23px -7px, rgb(0 0 0 / 4%) 0px 12px 12px -7px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
        <Text className={styles.cardText} weight="900">
          {title}
        </Text>
      </Card>
    </div>
  );
};

export default CpValueCard;
