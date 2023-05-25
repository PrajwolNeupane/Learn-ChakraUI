import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../Components/NavBar';
import { Grid, GridItem } from '@chakra-ui/react';

export default function RootLayout() {
    return (
        <Grid templateColumns={"repeat(6,1fr)"} bg="gray.50">
            <GridItem as={"aside"} colSpan={"1"} bgColor={"purple.400"} minHeight={"100hv"} p="30px">
                <span>SideBar</span>
            </GridItem>
            <GridItem as="main" colSpan={"5"} p="40px">
                <NavBar />
                <Outlet />
            </GridItem>
        </Grid>
    )
}
