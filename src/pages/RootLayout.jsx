import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../Components/NavBar';
import { Grid, GridItem } from '@chakra-ui/react';
import SideBar from '../Components/SideBar';

export default function RootLayout() {
    return (
        <Grid templateColumns={"repeat(6,1fr)"} bg="gray.50">
            <GridItem as={"aside"} colSpan={{base:6,lg:2,xl:1}} bgColor={"purple.400"} minHeight={{lg:"100vh"}} p={{base:"30px",lg:"30px"}}>
                <SideBar/>
            </GridItem>
            <GridItem as="main" colSpan={{base:6,lg:4,xl:5}} p="40px">
                <NavBar />
                <Outlet />
            </GridItem>
        </Grid>
    )
}
