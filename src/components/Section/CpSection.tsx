import { useViewportSize } from '@mantine/hooks';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import styles from './CpSection.module.scss';

interface CpSectionProps {
  imageSrc?: any;
  imageStyle?: React.CSSProperties;
  inverted?: boolean;
  style?: React.CSSProperties;
  text?: string;
}

const CpSection: NextPage<CpSectionProps> = ({
  imageSrc,
  imageStyle,
  inverted = false,
  style,
  text,
}) => {
  const { formatMessage } = useIntl();
  const { width } = useViewportSize();

  return (
    <section className={styles.section2} style={style}>
      <div
        className={styles.section2container}
        style={
          inverted && width > 1100
            ? { flexDirection: 'row-reverse' }
            : {}
        }
      >
        {imageSrc && (
          <div
            className={styles.flexOne}
            style={{
              width: '100%',
              height: '300px',
              position: 'relative',
              paddingLeft:
                inverted && width > 1100 ? '10px' : undefined,
              ...imageStyle,
            }}
          >
            <Image
              alt="construcao de light steel frame"
              layout="fill"
              objectFit="contain"
              src={imageSrc}
            />
          </div>
        )}
        <div className={styles.sectionText}>
          <span
            style={{
              fontFamily: 'Montserrat',
              textAlign: 'justify',
            }}
          >
            {formatMessage({ id: text })}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CpSection;
