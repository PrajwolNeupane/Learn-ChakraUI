import { UnlockIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge } from '@chakra-ui/react';
import React from 'react';

export default function NavBar() {

    const toast = useToast();

    const showToast = () => {
        toast({
            title: 'Logged Out',
            description: "Successfully Logged Out",
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <UnlockIcon />
        });
    }

    return (
        <Flex as={"nav"} p="10px" alignItems={"center"} gap={"10px"}>
            <Heading as="h1">Dojo Tasks</Heading>
            <Spacer />
            <HStack spacing={"20px"}>
                <Avatar name="P" src={"https://avatars.githubusercontent.com/u/96991442?s=96&v=4"}
                >
                    <AvatarBadge w={"1.3em"} bgColor={"teal.500"}>
                        <Text fontSize={"xs"} color="white">3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>prajwolneupane68@gmail.com</Text>
                <Button colorScheme='purple' onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>
        // <Flex bg={"gray.200"} justify={"space-between"} wrap="wrap" gap="2">
        //     <Box w="150px" h="50px" bg="red">1</Box>
        //     <Box w="150px" h="50px" bg="blue">2</Box>
        //     <Box w="150px" h="50px" bg="green">3</Box>
        //     <Box w="150px" h="50px" bg="yellow">4</Box>
        // </Flex>
    )
}
