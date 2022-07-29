import React, { useState } from 'react';
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
          ><div>MENU</div>{`😸`}
          </Button>
        ))}
  
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`test`}</DrawerHeader>
            <DrawerBody>
              <p>
                test
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }