import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export default function NavBar() {
  return (
    <Flex bg={"gray.200"} justify={"space-between"} wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">1</Box>
        <Box w="150px" h="50px" bg="blue">2</Box>
        <Box w="150px" h="50px" bg="green">3</Box>
        <Box w="150px" h="50px" bg="yellow">4</Box>
    </Flex>
  )
}
