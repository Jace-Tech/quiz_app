import { Box, Button, Container, Text, Flex, Heading, TableContainer, Table, Thead, Tr, Th, Tbody, Td, LinkBox, HStack, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure, Textarea, VStack, Checkbox } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import AdminLayout from "./layout/AdminLayout"

import { IoArrowBackSharp, IoAddSharp } from "react-icons/io5"
import AnswerItem from './components/AnswerItem'

const QuestionDetails = () => {
    const [question, setQuestion] = useState("")
    const [questionData, setQuestionData] = useState({
        question: "",
        time: 0
    })
    const [questionAnswer, setQuestionAnswer] = useState([
        {
            answer: "",
            correct: false
        }
    ])
    const [questionAnswerCheck, setQuestionAnswerCheck] = useState([])
    const [answerCounter, setAnswerCounter] = useState(1)
    const questions = useSelector(({ manageQuestions }) => manageQuestions.questions)
    const [deleteId, setDeleteId] = useState("")
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const { isOpen, onClose, onOpen } = useDisclosure()

    const setAnswer = (index, _answer) => {
        setQuestionAnswer(prev => [])
    }

    const setAnswerCheck = (index, check) => {
        const answers = questionAnswer

        answers[index] = {
            ...answers[index],
            correct: check
        }

        setQuestion(answers)
    }

    const increaseCounter = () => {
        if(answerCounter <= 4) {
            setAnswerCounter(prevCounter => prevCounter + 1)
            setQuestionAnswer(prevAnswer => [...prevAnswer, { answer: "", correct: false }])
        }
    }

    useEffect(() => {
        if (!id) navigate("/admin/question")
    }, [])

    useEffect(() => {
        const currentQuestion = questions?.find(question => question.question_id === id)
        if (!currentQuestion) navigate("/admin/question")
        setQuestion(currentQuestion)
    }, [questions])

    useEffect(() => console.log(questionData), [questionData])
    useEffect(() => console.log(questionAnswer), [questionAnswer])


    return (
        <AdminLayout>
            <Container maxW={"container.xl"}>
                <Flex py={5} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack gap={5}>
                        <IconButton size={"sm"} onClick={() => navigate("/admin/question")}>
                            <IoArrowBackSharp size={16} />
                        </IconButton>
                        <Heading fontWeight={500} fontSize={"2xl"} color={"gray.600"}>{question.name}</Heading>
                    </HStack>
                    <Button onClick={onOpen}>Add Question</Button>
                </Flex>

                <Box mt={5}>
                    {
                        question?.data ? (
                            <Text>Data</Text>
                        ) : (
                            <Text textAlign={"center"}>No Data Found</Text>
                        )
                    }
                </Box>

                {/* Add Question Modal */}
                <Modal
                    size={"xl"}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent mx={4}>
                        <ModalHeader borderBottomWidth={1}> Add Question</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex alignItems={"center"} gap={5} flexWrap={"wrap"}>
                                <FormControl flex={1}>
                                    <FormLabel>Question</FormLabel>
                                    <Textarea placeholder='What is PHP?' value={questionData.question} onChange={e => setQuestionData(prevQuestions => ({...prevQuestions, question: e.target.value}))} />
                                </FormControl>
                            </Flex>

                            <Flex mt={4} alignItems={"center"} gap={5} flexWrap={"wrap"}>
                                <FormControl flex={1}>
                                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                                        <FormLabel textTransform={"uppercase"} fontSize={"sm"}>Answers</FormLabel>
                                        <IconButton size={"xs"} fontSize={"lg"} colorScheme={"blue"} rounded={"full"} onClick={increaseCounter}>
                                            <IoAddSharp />
                                        </IconButton>
                                    </Flex>
                                    <VStack>
                                        {
                                            new Array(answerCounter).fill("*").map((_, index) => (
                                               <AnswerItem 
                                                    key={index}
                                                    index={index} 
                                                    isChecked={questionAnswer[index].correct}
                                                    handleChange={setAnswer}
                                                    handleCheck={setAnswerCheck}
                                                    text={questionAnswer[index].answer}
                                                />
                                            ))
                                        }
                                    </VStack>
                                </FormControl>
                            </Flex>

                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Add Question
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                {/* Add Question Modal */}
            </Container>
        </AdminLayout>
    )
}

export default QuestionDetails