import {
    Box, Button, useToast, Container, Text, Flex,
    FormControl, FormLabel, Heading, Input, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    Textarea, useDisclosure, TableContainer, Table, Thead, Tr, Th, Tbody, Td, LinkBox, HStack, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { createQuestion, deleteQuestion, fetchQuestions } from '../../api'
import { addQuestion, setQuestion, removeQuestion } from "../../store/slices/manageQuestionSlice"
import AdminLayout from "./layout/AdminLayout"

const ManageQuestions = () => {
    const [questionName, setQuestionName] = useState("")
    const questions = useSelector(({ manageQuestions }) => manageQuestions.questions)
    const [deleteId, setDeleteId] = useState("")
    const dispatch = useDispatch()

    const { isOpen, onClose, onOpen } = useDisclosure()
    const { isOpen: createIsOpen, onClose: createOnClose, onOpen: createOnOpen } = useDisclosure()
    const { isOpen: alertIsOpen, onClose: alertOnClose, onOpen: alertOnOpen } = useDisclosure()
    const toast = useToast()

    const alertRef = useRef()


    const handleCreateQuestion = async () => {
        const request = await createQuestion(questionName)
        if ("error" in request) {
            toast({
                title: request.error,
                status: "error",
                duration: 5000,
                isClosable: true
            })
            setQuestionName("")
            createOnClose()
            return
        }
        dispatch(addQuestion(request))
        createOnClose()
        toast({
            title: "Question created",
            status: "success",
            duration: 5000,
            isClosable: true
        })
        setQuestionName("")
    }

    // Fetch Questions
    useEffect(() => {
        ; (async () => {
            const data = await fetchQuestions()
            dispatch(setQuestion(data))
        })()
    }, [])

    const handleDeleteQuestion = async () => {
        if(deleteId) {
            const data = await deleteQuestion(deleteId)
            if("error" in data) {
                toast({
                    title: data.error,
                    status: "error",
                    duration: 5000,
                    isClosable: true
                })
                setDeleteId("")
                alertOnClose()
                return
            }

            dispatch(removeQuestion(deleteId))
            alertOnClose()
            toast({
                title: 'Question deleted',
                duration: 5000,
                status: "success",
                isClosable: true,
            })
            setDeleteId("")
        }
    }

    const handleInitiateDeleteQuestion = (id) => {
        setDeleteId(id)
        alertOnOpen()
    }

    useEffect(() => console.log(questions), [questions])
    useEffect(() => console.log(deleteId), [deleteId])

    return (
        <AdminLayout>
            <Container maxW={"container.xl"}>
                <Flex py={5} alignItems={"center"} justifyContent={"space-between"}>
                    <Heading fontWeight={500} fontSize={"2xl"} color={"gray.600"}>Manage Question</Heading>
                    <Button onClick={createOnOpen}>Create Question</Button>
                </Flex>

                {/* Create Question Modal */}
                <Modal
                    isOpen={createIsOpen}
                    onClose={createOnClose}
                >
                    <ModalOverlay />
                    <ModalContent mx={4}>
                        <ModalHeader borderBottomWidth={1}> Create Question</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Flex alignItems={"center"} gap={5} flexWrap={"wrap"}>
                                <FormControl flex={1}>
                                    <FormLabel>Question Name</FormLabel>
                                    <Input value={questionName} onChange={(e) => setQuestionName(e.target.value)} placeholder='Question Name' />
                                </FormControl>
                            </Flex>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={handleCreateQuestion} colorScheme='blue' mr={3}>
                                Add Question
                            </Button>
                            <Button onClick={createOnClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                {/* Create Question Modal */}

                {/* Delete Alert */}
                <AlertDialog
                    isOpen={alertIsOpen}
                    leastDestructiveRef={alertRef}
                    motionPreset={'slideInBottom'}
                    onClose={alertOnClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Delete Question
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                Are you sure? You can't undo this action afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={alertRef} onClick={alertOnClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='red' onClick={handleDeleteQuestion} ml={3}>
                                    Delete
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
                {/* Delete Alert */}

                <Box mt={5}>
                    <TableContainer>
                        <Table variant='striped' colorScheme='gray'>
                            <Thead>
                                <Tr>
                                    <Th>Question ID</Th>
                                    <Th>Question Name</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    questions.length > 0 ? (
                                        questions?.map(question => (
                                            <Tr key={question.question_id}>
                                                <Th>
                                                    <LinkBox color={"blue.400"}>
                                                        <Link to={`${question.question_id}`}>{question.question_id}</Link>
                                                    </LinkBox>
                                                </Th>
                                                <Th>{question.name}</Th>
                                                <Th>
                                                    <HStack gap={5}>
                                                        <Text cursor={"pointer"} color={"blue.600"}>Edit</Text>
                                                        <Text cursor={"pointer"} color={"red.600"} onClick={() => handleInitiateDeleteQuestion(question.question_id)}>Delete</Text>
                                                    </HStack>
                                                </Th>
                                            </Tr>
                                        ))
                                    ) : (
                                        <Tr>
                                            <Td colSpan={3}>
                                                <Text textAlign={"center"} fontSize={"sm"} color={"gray.600"}>No Question Found</Text>
                                            </Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </AdminLayout>
    )
}

export default ManageQuestions