import { Box, Button, Container, FormControl, FormLabel, Heading, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IoRemove } from "react-icons/io5"
import Header from '../components/Header'
import { questionsData } from '../data'
import { MARK_PER_QUESTION, MAX_SECONDS_PER_QUESTION } from '../utils'
import { startQuiz } from '../api'

const OnBoardPage = () => {
    const user = useSelector(({ user }) => user.user) 
    const { isOpen, onClose, onOpen} = useDisclosure()
    const [question, setQuestion] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    
    const questionsLength = questionsData.length

    const handleBegin = async () => {
        if(!question) {
            setError(true)
            return
        }

        setIsLoading(true)

        const data = {
            question_id: question,
            student_id: user.id
        }

        const result = await startQuiz(data)
        if("error" in result) {
            showAlert(toast, result.error, 'error')
            return
        }

        localStorage.setItem("QUIZ", JSON.stringify(result))
        localStorage.setItem("QUIZ_DATA", JSON.stringify({...result, finished: false}))
        setIsLoading(false)
        navigate("/question")
        
    }

    useEffect(() => {
        if(!user.name) navigate("/")
    }, [user])

    return (
        <Box userSelect={"none"}>
            {
                isLoading && (
                    <Box position={"fixed"} d={"flex"} alignItems={"center"} justifyContent={"center"} zIndex={10} bgColor={"#fff"} opacity={.8} left={0} top={0} w={"100%"} height={"100%"}>
                        <Spinner size={"xl"} colorScheme={"blue"} />
                    </Box>
                )
            }
            <Header />
            <Box>
                <Container maxW={"container.lg"}>
                    <Heading mt={8} pb={5} fontSize={"xl"} color={"gray.600"} letterSpacing={"wider"} textTransform={"uppercase"} fontWeight={400}>RULES</Heading>
                    <Box mt={5}>
                        <List spacing={3}>
                            <ListItem fontSize={"md"} color={"gray.600"}> 
                                <ListIcon as={IoRemove} color={"gray.400"} />
                                There are a total number of { questionsLength } questions.
                            </ListItem>

                            <ListItem fontSize={"md"} color={"gray.600"}> 
                                <ListIcon as={IoRemove} color={"gray.400"} />
                                You approximately have { MAX_SECONDS_PER_QUESTION } seconds to answers each questions.
                            </ListItem>

                            <ListItem fontSize={"md"} color={"gray.600"}> 
                                <ListIcon as={IoRemove} color={"gray.400"} />
                                You're are to choose one answer before proceeding to the next question.
                            </ListItem>

                            <ListItem fontSize={"md"} color={"gray.600"}> 
                                <ListIcon as={IoRemove} color={"gray.400"} />
                                You score approximately { MARK_PER_QUESTION } for any correct answer.
                            </ListItem>

                            <ListItem fontSize={"md"} color={"gray.600"}> 
                                <ListIcon as={IoRemove} color={"gray.400"} />
                                Read the question very well before choosing an answer.
                            </ListItem>

                            <ListItem fontSize={"md"} color={"gray.600"}> 
                                <ListIcon as={IoRemove} color={"gray.400"} />
                                You can't go back to the previous question.
                            </ListItem>

                            <ListItem fontSize={"md"} color={"gray.600"}> 
                                <ListIcon as={IoRemove} color={"gray.400"} />
                                You can't go back to the quiz again once you've already finished.
                            </ListItem>
                        </List>

                        <Box p={5} py={3} bgColor={"red.400"} textAlign={"center"} mt={5} w={"full"} maxW={500} rounded={"sm"}>
                            <Text fontSize={"sm"} color={"white"}>NOTE: DO NOT REFRESH YOUR PAGE!</Text>
                        </Box>

                        <Box mt={16} textAlign={"center"}>
                            <Button onClick={onOpen} size={"lg"} bgColor={"gray.600"} _hover={{ bgColor: "gray.700" }} rounded={"sm"} px={10} color={"white"}>Start Quiz</Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent mx={4}>
					<ModalHeader borderBottomWidth={1}> Hold up!</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<VStack gap={2} color={"gray.600"}>
							<FormControl flex={1}>
								<FormLabel fontSize={"sm"}>Question ID</FormLabel>
								<Input rounded={"sm"} value={question} placeholder={"eg: ques_01234"} borderColor={error && "red.500"} onChange={e => setQuestion(e.target.value)}/>
								{error && <Text fontSize={"sm"} mt={2} color={"red.600"}>required</Text>}
							</FormControl>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button onClick={handleBegin} colorScheme='blue' mr={3}>
							Begin
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
        </Box>
    )
}

export default OnBoardPage