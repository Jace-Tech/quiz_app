import { VStack } from '@chakra-ui/react'
import React from 'react'
import SideBarItem from './SideBarItem'

const SideBar = () => {

    const sidebarItems = [
        {
            link: "/admin/",
            title: "Dashboard",
        },
        {
            link: "/admin/quiz",
            title: "Quiz",
        },
        {
            link: "/admin/question",
            title: "Question",
        },
        {
            link: "/admin/student",
            title: "Student",
        },
    ]

    return (
        <VStack flex={1} py={6} h={"100%"} bgColor={"gray.700"}>
            {
                sidebarItems.map((item, index) => <SideBarItem {...item} key={`${item.link}-${index}`} />)
            }
        </VStack>
    )
}

export default SideBar