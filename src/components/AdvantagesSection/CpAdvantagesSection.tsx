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
import styles from './CpAdvantagesSection.module.scss';

const charactersList = [
  {
    content:
      'Por se tratar de uma estrutura leve, a fundação é menos exigida, economizando nessa etapa construtiva.',
    icon: <FaFeatherAlt color="#038C4C" size={50} />,
    label: 'Leveza',
  },

  {
    content:
      'A maioria dos materiais são produzidos fora da obra, garantindo assim uma qualidade superior do produto, além de aumentar a produtividade no canteiro.',
    icon: <FaCogs color="#038C4C" size={50} />,
    label: 'Industrialização',
  },
  {
    content:
      'A obra em LSF leva em geral 1/3 do tempo de execução de uma obra pelo método convencional (Concreto e blococerâmico).',
    icon: <FaRegClock color="#038C4C" size={50} />,
    label: 'Rapidez',
  },
  {
    content:
      'A estrutura do LSF consegue vencer grandes vãos e se adequa facilmente a qualquer projeto arquitetônico.',
    icon: <FaExpandArrowsAlt color="#038C4C" size={50} />,
    label: 'Versatilidade',
  },
  {
    content:
      'Tenha mais conforto e tranquilidade no seu lar, o LSF oferece um melhor desempenho térmico e acústico para sua edificação.',
    icon: <FaThermometerQuarter color="#038C4C" size={50} />,
    label: 'Desempenho',
  },
  {
    content:
      'O sistema faz parte da construção a seco, ou seja, o uso de recursos naturais e os desperdícios são muito reduzidos em relação a construção convencional.',
    icon: <BiWorld color="#038C4C" size={50} />,
    label: 'Sustentabilidade',
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
              {character.label}
            </Text>
          </Box>
          <Box className={styles.textContainer}>
            <Text align="center" className={styles.text} weight="400">
              {character.content}
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CpAdvantagesSection;
