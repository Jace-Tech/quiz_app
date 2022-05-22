import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const QuizItem = () => {
    return (
        <Flex borderWidth={2} shadow={"lg"} transition={".4s"} _hover={{borderColor: "gray.300"}} cursor={'pointer'} w={300} flexDir={"column"} p={5} rounded={'md'}>
            <Text fontSize={"lg"} fontWeight={600} textTransform={"uppercase"} color={"gray.600"}>PHP Basics</Text>

            <Flex>
                <Text fontSize={"sm"} color={"gray.500"}>No of questions:</Text>
                <Text fontSize={"sm"} fontWeight={600} color={"gray.500"} ml={1}>30</Text>
            </Flex>

            <Flex>
                <Text fontSize={"sm"} color={"gray.500"}>No of participants:</Text>
                <Text fontSize={"sm"} fontWeight={600} color={"gray.500"} ml={1}>8</Text>
            </Flex>
        </Flex>
    )
}

export default QuizItem