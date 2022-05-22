import React from 'react'
import { Box, Container, Heading } from "@chakra-ui/react"


const Header = () => {
    return (
        <Box py={6} borderBottomWidth={1}>
            <Container w={"90%"} maxW={1200}>
                <Heading fontSize={"2xl"} color={"gray.700"}>Jace Dev.</Heading>
            </Container>
        </Box>
    )
}

export default Header 