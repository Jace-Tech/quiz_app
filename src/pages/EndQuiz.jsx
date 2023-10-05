import { Box, Container, Heading, Spinner, Text, VStack, useId, Center  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { endQuiz } from '../api'
import CheckAnswer from '../components/CheckAnswer'
import Header from '../components/Header'
import { MARK_PER_QUESTION } from '../utils'

const EndQuiz = () => {
    const [remark, setRemark] = useState("")
    const [totalMark, setTotalMark] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const result = useSelector(({ answers }) => answers.answer)

    const getMarks = () => {
        if(result) {
            const correctAnswer = [...result].filter(item => item.status)
            const mark = Math.floor(correctAnswer.length * MARK_PER_QUESTION)
            setTotalMark(mark)
        }
    }

    const getRemark = () => {
        if(totalMark) {
            if(totalMark >= 70) {
                setRemark("Outstanding! 🥳")
            }
            else if((totalMark >= 60) && (totalMark < 70)) {
                setRemark("Excellent! 🎉")
            }
            else if((totalMark >= 50) && (totalMark < 60)) {
                setRemark("Nice! 👏🏻")
            }
            else if((totalMark >= 40) && (totalMark < 50)) {
                setRemark("Good! 👍🏻, Try harder next time")
            }
            else if((totalMark >= 30) && (totalMark < 40)) {
                setRemark("Fair! 😩, Work harder next time")
            }
            else {
                setRemark("failed! ☹️, Better luck next time")
            }
        }
        else {
            setRemark("failed! ☹️, Better luck next time")
        }
    }

    const handleEndQuiz = async () => {
        const QUIZ = JSON.parse(localStorage.getItem('QUIZ'))

        const data = {
            ...QUIZ,
            // answers: result,
            score: totalMark
        }

        const result = await endQuiz(data)
        console.log(result)
    }

    useEffect(() => getMarks(), [result])
    useEffect(() => result && setIsLoading(false), [result])
    useEffect(() => getRemark(), [totalMark])

    useEffect(() => {
        if(totalMark && result?.length) {
           handleEndQuiz()
        }
    }, [totalMark, result])

    return (
        <Box>
            {
                isLoading && (
                    <Box position={"fixed"} d={"flex"} alignItems={"center"} justifyContent={"center"} zIndex={10} bgColor={"#fff"} opacity={.8} left={0} top={0} w={"100%"} height={"100%"}>
                        <Spinner size={"xl"} colorScheme={"blue"} />
                    </Box>
                )
            }

            <Header />
            <Container maxW={"container.lg"}>
                <Box mt={5}>
                    <Text textAlign={"center"} fontSize={"5xl"} textTransform={"capitalize"} color={"gray.600"}>{ remark.split(', ')[0] }</Text>
                    <Text textAlign={"center"} mt={5} fontSize={"xl"} color={"gray.500"}>You scored: <Center display={"inline-block"} fontWeight={500}>{ totalMark + "%"}</Center> </Text>
                    <Text textAlign={"center"} mt={5} fontSize={"sm"} fontStyle={"italic"} textTransform={"capitalize"} color={"gray.500"}>{ remark.split(', ')[1] }</Text>
                </Box>

                <Box mt={20}>
                    <Heading fontWeight={500} color={"gray.600"} py={5} borderBottomWidth={1} fontSize={"2xl"}>Answers</Heading>

                    <VStack gap={5}>
                        {
                            result?.map((answer, index) => (
                                <CheckAnswer {...answer} key={index} />
                            ))
                        }
                    </VStack>
                </Box>
            </Container>
            
        </Box>
    )
}

export default EndQuiz