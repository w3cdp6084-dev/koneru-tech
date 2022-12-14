import Image from 'next/image'
import styles from '../styles/pages/about.module.scss'

import {
  Box,
} from '@chakra-ui/react';
export default function About() {
    return (
      <main className={styles.main}>
        <Box className={styles.itemWrap}>
          <Image src="/images/logo.png" width={150} height={150} alt="logo" />
          <p className={styles.aboutNickname}>KONEKONE</p>
          <p className={styles.aboutName}>
            Yusuke Morið±<br />
            Designer/Developerð³
          </p>
          <p className={styles.aboutDesc}>
          KONEKONEã¨ããå±å·ã§ããã¶ã¤ãã¼ã¨ãã­ã³ãã¨ã³ãããã£ã¦ã¾ãã<br />
          ãã©ã³ãã£ã³ã°/ã³ã³ã»ããã¡ã¤ã¯ã®è¨­è¨ãå¤§åã«ããã¢ãã¥ããããããªã£ã¦ãã¾ãã<br />
          å°ãã§ãåèã«ãªãã°å¹¸ãã§ãð¸
          </p>
        </Box>
      </main>
    );
  }