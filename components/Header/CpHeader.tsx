import type { NextPage } from 'next';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../assets/taishi.svg';
import styles from './CpHeader.module.scss';

const CpHeader: NextPage = () => {
  return (
    <nav className={styles.header}>
      <div>
        <Image height={100} src={Logo} width={100} />
      </div>
      <div>
        <GiHamburgerMenu className={styles.menu} size={40} />
      </div>
    </nav>
  );
};

export default CpHeader;
