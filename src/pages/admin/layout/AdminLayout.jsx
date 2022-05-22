import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const AdminLayout = ({ children }) => {
    return (
        <Box h={"100vh"} overflow={"hidden"}>
            <Header />

            <Flex w={"100%"} h={"100vh"}>
                <Box w={280}>
                    <SideBar />
                </Box>

                <Flex flex={1} w={"calc(100% - 300px)"}>
                    { children }
                </Flex>
            </Flex>
        </Box>
    )
}

export default AdminLayout