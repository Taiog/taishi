import { Box, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import styles from './CpImageWithCaption.module.scss';

interface CpImageWithCaptionProps {
  src: StaticImageData;
  text: string;
  upperText?: string;
}

const CpImageWithCaption: NextPage<CpImageWithCaptionProps> = ({
  src,
  text,
  upperText,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box>
          <Text>{upperText}</Text>
          <Image alt={text} src={src} />
          <Text
            sx={{
              paddingBottom: 20,
              alignSelf: 'center',
            }}
          >
            {text}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default CpImageWithCaption;
