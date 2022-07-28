import Link from 'next/link'
import { FC } from 'react';

import {
    Box,
    Flex,
    Container,
    Heading,
    /* 追加 */
    useColorMode,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Header:FC= () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header className="text-gray-600 body-font bg-blue-500">
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center">
                    <Link href="/" passHref>
                        {/* 変更 ライトモードでgray.600、ダークモードでwhiteとする */}
                        <Heading as='h1' fontSize="2xl" cursor="pointer" color={useColorModeValue('gray.600', 'white')}>
                            Next.js microCMS Blog
                        </Heading>
                    </Link>
                    {/* 追加 切り替えアイコン */}
                    <Button size='lg' onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Container>
        </Box>
    </header>
  )
}