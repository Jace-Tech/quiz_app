import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CheckAnswer = ({ question, answer, status }) => {
    const [correctAnswer, setCorrectAnswer] = useState("")
    const questions = useSelector(({questions}) => questions.questions)

    useEffect(() => {
        const questionIndex = questions?.findIndex(item => item.question === question)
        const correctAnswer = questions?.[questionIndex].answers.filter(item => item.correct)[0].answer
        setCorrectAnswer(correctAnswer)
    }, [])

    return (
        <Box w={"100%"} bgColor={status ? "green.50" : "red.50"} py={5} px={10}>
            <Flex>
                <Heading fontSize={"xl"} fontWeight={600} color={"gray.600"}>Question:</Heading>
                <Heading ml={2} fontSize={"xl"} fontWeight={500} color={"gray.500"}>{ question }</Heading>
            </Flex>
            <Flex mt={5}>
                <Text fontSize={"lg"} fontWeight={600} color={"gray.600"}>Answer: </Text>
                <Text ml={2} fontSize={"lg"} fontWeight={400} color={"gray.500"}> { answer }</Text>
            </Flex>
            {
                !status && (
                    <Flex mt={5} pt={2} borderTopWidth={1}>
                        <Text fontSize={"md"} fontWeight={600} color={"gray.600"}>Correct Answer: </Text>
                        <Text flex={1} ml={2} fontSize={"md"} fontWeight={500} color={"green.600"}>{ correctAnswer }</Text>
                    </Flex>
                )
            }
        </Box>
    )
}

export default CheckAnswer