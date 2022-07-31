import Image from 'next/image'
import styles from '../styles/components/Layout.module.scss'

import {
  Box,
  Flex,
  Container,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
export default function About() {
    return (
      <main className={styles.main}>
        <Box className={styles.itemWrap}>
          <Image src="/images/logo.png" width={150} height={150} alt="logo" />
          <p className={styles.aboutNickname}>KONEKONE</p>
          <p className={styles.aboutName}>
            Yusuke Mori🐱<br />
            Designer/Developer🍳
          </p>
          <p className={styles.aboutDesc}>
          KONEKONEという屋号で、デザイナーとフロントエンドをやってます。<br />
          ブランディング/コンセプトメイクの設計を大切にし、モノづくりをおこなっています。<br />
          少しでも参考になれば幸いです😸
          </p>
        </Box>
      </main>
    );
  }