import { Checkbox, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const AnswerItem = ({ index, handleChange, text, isChecked, handleCheck }) => {
    const prefix = "abcde"

    return (
        <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"} gap={5}>
            <FormControl w={"100%"} flex={.95}>
                <FormLabel fontSize={"sm"} color={"gray.600"} textTransform={"capitalize"}> Answer {prefix[index]}</FormLabel>
                <Input value={text} onChange={(e) => handleChange(index, e.target.value)} />
            </FormControl>

            <FormControl flex={.05}>
                <FormLabel fontSize={"sm"} color={"gray.600"} textTransform={"capitalize"}>Correct</FormLabel>
                <Checkbox onChange={() => handleCheck(index)} isChecked={isChecked} />
            </FormControl>
        </Flex>
    )
}

export default AnswerItem