import React from 'react';
import { Heading, Text, Container, Box, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Flex, HStack, Button, Divider, Avatar } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';

export default function Dashboard() {

  const task = useLoaderData()


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
    <SimpleGrid spacing={10} minChildWidth={"300px"} mt={"40px"}>
      {
        task?.map(task => (
          <Card key={task.id} borderTop={"8px"} borderColor={"purple.400"} bg="white">
            <CardHeader>
              <Flex>
                <Avatar src={task.img}/>
                <Box>
                  <Heading as={"h3"} size={"sm"} >{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor={"gray.300"}/>
            <CardFooter>
              <HStack>
                <Button variant={"ghost"} leftIcon={<ViewIcon/>}>Watch</Button>
                <Button variant={"ghost"} leftIcon={<EditIcon/>}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))
      }
    </SimpleGrid >
  )
}

export const taskLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
}