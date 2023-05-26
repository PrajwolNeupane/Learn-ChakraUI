import React from 'react';
import { Heading, Text, Container,Box, SimpleGrid } from '@chakra-ui/react';

export default function Dashboard() {

  // const boxStyles = {
  //   p:"10px",
  //   bg:"purple.400",
  //   color:"white",
  //   m:'10px',
  //   textAlign:"center",
  //   filter:"blur(1px)",
  //   ':hover':{
  //     filter:"blur(0px)",
  //     color:"black",
  //     bgColor:"blue.600"
  //   }
  // }

  return (
    // <Container as="section" maxWidth={"4xl"} py={"20px"}>
    //   <Heading my="30px" p="10px">Chakra UI Components</Heading>
    //   <Text marginLeft={"30px"}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</Text>
    //   <Text ml="30px" color={"blue.600"} fontWeight={"bold"}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</Text>
    //   <Box my="30px" p="20px" bgColor={"orange"} color={"white"}>
    //     <Text>This is a box</Text>
    //   </Box>
    //   <Box sx={boxStyles}>
    //     Hello, Prajwol
    //   </Box>
    // </Container>
    <SimpleGrid p="10px" spacing={10} minChildWidth={"250px"}>
      <Box bg='white' h="200px" border={"1px"}>
        <Text color={{base:'pink.700',md:"blue.700",lg:'green.700'}}>Hello</Text>
      </Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
      <Box bg='white' h="200px" border={"1px"}></Box>
    </SimpleGrid>
  )
}
