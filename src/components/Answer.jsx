import { Flex, Text } from '@chakra-ui/react'
import React from 'react'


const Answer = ({ handleClick, answer: { answer: ans}, answer, selected, index, error }) => {

    const prefix = ['a', 'b', 'c', 'd']
    
    return (
        <Flex w={"100%"} minHeight={100} data-group alignItems={"center"} onClick={() => handleClick(answer)} cursor={"pointer"} py={5} px={6} borderWidth={2} borderColor={ error ? "red.400" : selected ? "blue.300" : "gray.200"} _hover={{borderColor: selected ? "blue.300" : "gray.400"}} rounded={"md"}>
            <Text textTransform={"uppercase"} _groupHover={{ color: selected ? "blue.300" : "gray.400"}} fontSize={"6vmin"} color={!selected ? "gray.300" : "blue.300"}> { prefix[index] }</Text>
            <Text flex={1} ml={5}> { ans } </Text>
        </Flex>
    )
}

export default Answer