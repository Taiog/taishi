import { Box, SimpleGrid, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { BiWorld } from 'react-icons/bi';
import {
  FaCogs,
  FaExpandArrowsAlt,
  FaFeatherAlt,
  FaRegClock,
  FaThermometerQuarter,
} from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import styles from './CpAdvantagesSection.module.scss';

const charactersList = [
  {
    content: 'index.benefits.lightness.text',
    icon: <FaFeatherAlt color="#038C4C" size={50} />,
    label: 'index.benefits.lightness.label',
  },
  {
    content: 'index.benefits.industrialization.text',
    icon: <FaCogs color="#038C4C" size={50} />,
    label: 'index.benefits.industrialization.label',
  },
  {
    content: 'index.benefits.speed.text',
    icon: <FaRegClock color="#038C4C" size={50} />,
    label: 'index.benefits.speed.label',
  },
  {
    content: 'index.benefits.versatility.text',
    icon: <FaExpandArrowsAlt color="#038C4C" size={50} />,
    label: 'index.benefits.versatility.label',
  },
  {
    content: 'index.benefits.performance.text',
    icon: <FaThermometerQuarter color="#038C4C" size={50} />,
    label: 'index.benefits.performance.label',
  },
  {
    content: 'index.benefits.susteinability.text',
    icon: <BiWorld color="#038C4C" size={50} />,
    label: 'index.benefits.susteinability.label',
  },
];

const CpAdvantagesSection = () => {
  const { width } = useViewportSize();

  return (
    <SimpleGrid cols={width < 768 ? 1 : 3}>
      {charactersList.map((character) => (
        <Box className={styles.container} key={character.label}>
          <Box className={styles.card}>
            {character.icon}
            <Text className={styles.title} size="xl" weight="700">
              <FormattedMessage id={character.label} />
            </Text>
          </Box>
          <Box className={styles.textContainer}>
            <Text
              align="center"
              className={styles.text}
              style={{
                textAlign: 'justify',
              }}
              weight="400"
            >
              <FormattedMessage id={character.content} />
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CpAdvantagesSection;
