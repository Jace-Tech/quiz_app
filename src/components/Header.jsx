import React from 'react'
import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react"
import { useSelector } from 'react-redux'


const Header = () => {
    const user = useSelector(({ user }) => user.user)

    return (
        <Box py={6} borderBottomWidth={1}>
            <Container w={"90%"} maxW={1200}>
                <Flex alignItems={"center"}>
                    <Heading fontSize={"2xl"} color={"gray.700"}>Jace Dev.</Heading>
                    <Spacer />
                    { user?.name && <Text color={"gray.600"} fontWeight={300} fontSize={"lg"}> { user.name } </Text> }
                </Flex>
            </Container>
        </Box>
    )
}

export default Header 