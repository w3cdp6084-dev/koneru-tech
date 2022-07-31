import styles from '../styles/pages/404.module.scss'

import {
  Box,
} from '@chakra-ui/react';
export default function Custom404() {
    return (
      <main className={styles.main}>
        <Box>
          <div className={styles.item}>
            <h2 className={styles.titleH2}>404</h2>
            <p className={styles.desc}>🙀ページがありません🙀</p>
          </div>
        </Box>
      </main>
    );
  }