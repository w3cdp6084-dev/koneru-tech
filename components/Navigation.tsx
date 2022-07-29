import { FC } from 'react';
import {
    Stack,
    LinkProps,
    Link,
} from '@chakra-ui/react';

const HoverLink : FC<LinkProps> = (props) => {
    return  <Link _hover={{bg:"teal.200"}} p={2} {...props } />
  }
export const Navigation = () => {
  return (
    <Stack as="nav">
      <HoverLink href="/">HOME</HoverLink>
      <HoverLink href="/">ABOUT</HoverLink>
      <HoverLink href="/">POST</HoverLink>
      <HoverLink href="/">CONTACT</HoverLink>
    </Stack>
  )
}