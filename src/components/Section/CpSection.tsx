import type { NextPage } from 'next';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import styles from './CpSection.module.scss';

interface CpSectionProps {
  imageSrc?: any;
  text?: string;
  title?: string;
}

const CpSection: NextPage<CpSectionProps> = ({
  imageSrc,
  text,
  title,
}) => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.section2}>
      <div className={styles.section2container}>
        {imageSrc && (
          <div
            className={styles.flexOne}
            style={{
              width: '100%',
              height: '300px',
              position: 'relative',
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
        <div className={styles.flexOne}>
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
