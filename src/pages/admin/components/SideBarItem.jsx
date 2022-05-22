import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LinkBox, Text } from '@chakra-ui/react'

const SideBarItem = ({ link, title }) => {
    const { pathname } = useLocation()

    return (
        <LinkBox textTransform={"capitalize"} w={"100%"} cursor={"pointer"} color={pathname === link ? "gray.600" : "whiteAlpha.800"} bgColor={pathname === link && "gray.100"} _hover={{ bgColor: "gray.100", color: "gray.600" }} py={2} px={4}>
            <Link style={{ display: "block", width: "100%", padding: ".2    rem 0"}}to={link}>{ title }</Link>
        </LinkBox>
    )
}

export default SideBarItem