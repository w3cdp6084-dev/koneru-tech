import styles from "../styles/components/Header.module.scss"
import Link from 'next/link'
import { FC } from 'react';
import {
    Box,
    Flex,
    Container,
    Heading,
    useColorMode,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { DrawerMenu } from '../components/DrawerMenu';

export const Header:FC= () => {
const { colorMode, toggleColorMode } = useColorMode();
  return (
        <Box>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <Link href="/" passHref>
                        <Heading as='h1' fontSize="2xl" cursor="pointer" color={useColorModeValue('gray.600', 'white')}>
                            LOGO
                        </Heading>
                    </Link>
                    <Flex py="4" justifyContent="space-between" alignItems="center">
                        <DrawerMenu/>
                        <Box className={styles.btnOuter}>
                            <Button onClick={toggleColorMode} className={styles.btnInner}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Container>
        </Box>
  )
}