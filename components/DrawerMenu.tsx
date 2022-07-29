import React, { useState } from 'react';
import styles from "../styles/components/Header.module.scss"
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { Navigation } from '../components/Navigation';

export const DrawerMenu = () => {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
    const sizes = ['md']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleClick(size)}
            key={size}
            m={4}
            className={styles.menuBg}
          >
          <div className={styles.menuWrap}>MENU<br />{`😸`}</div>
          </Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`KONERU TECH`}</DrawerHeader>
            <DrawerBody>
            <Navigation />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }