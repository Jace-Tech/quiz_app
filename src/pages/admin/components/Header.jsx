import { Box, Container, Flex, LinkBox, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <Box alignItems={"center"} py={4} bgColor={"gray.500"}>
            <Container maxW={"container.xl"}>
                <Flex alignItems={"center"}>
                    <LinkBox>
                        <Link to={""}>
                            <Text fontSize={"xl"} color={"white"} fontWeight={600}>Jace Dev.</Text>
                        </Link>
                    </LinkBox>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header