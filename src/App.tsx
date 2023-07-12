import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

export const App = () => (
  <ChakraProvider theme={theme}>
    <h1>Helooo</h1>
  </ChakraProvider>
);
