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
      <HoverLink href="/burger">Burger</HoverLink>
      <HoverLink href="/sidemenu">Sidemenu</HoverLink>
      <HoverLink href="/drink">Drink</HoverLink>
      <HoverLink href="/takeout">Takeout</HoverLink>
    </Stack>
  )
}