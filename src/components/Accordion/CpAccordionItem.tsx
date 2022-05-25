import {
  Accordion,
  Avatar,
  Box,
  Card,
  Group,
  Menu,
  SimpleGrid,
  Spoiler,
  Stack,
  Text,
} from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import type { NextPage } from 'next';
import {
  FaCogs,
  FaExpandArrowsAlt,
  FaFeatherAlt,
  FaRecycle,
  FaRegClock,
  FaThermometerQuarter,
} from 'react-icons/fa';

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
    label: 'Desempenho termoacústico',
  },
  {
    content:
      'O sistema faz parte da construção a seco, ou seja, o uso de recursos naturais e os desperdícios são muito reduzidos em relação a construção convencional.',
    icon: <FaRecycle color="#038C4C" size={50} />,
    label: 'Sustentabilidade',
  },
];

interface CpAccordionCardProps {
  icon?: any;
  text?: string;
  title?: string;
}

const CpAccordionCard: NextPage<CpAccordionCardProps> = ({
  icon,
  text,
  title,
}) => {
  const { width } = useViewportSize();

  return (
    <SimpleGrid cols={width < 768 ? 1 : 3}>
      {charactersList.map((character) => (
        <Box
          key={character.label}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            background: '#fff',
            borderRadius: 3,
            minHeight: '350px',
          }}
        >
          <Box
            style={{
              flex: 1,
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {character.icon}
            <Text
              className="text-center"
              size="xl"
              style={{
                marginTop: 20,
                textTransform: 'uppercase',
                fontSize: '1.5rem',
                fontFamily: 'Montserrat',
                textAlign: 'center',
              }}
              weight="700"
            >
              {character.label}
            </Text>
          </Box>
          <Box
            style={{
              flex: 1,
              height: '50%',
              marginTop: 20,
            }}
          >
            <Text
              align="center"
              className="text-center"
              style={{
                fontFamily: 'Montserrat',
                textAlign: 'justify',
              }}
              weight="400"
            >
              {character.content}
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default CpAccordionCard;
