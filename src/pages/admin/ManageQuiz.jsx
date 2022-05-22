import { Box, Container, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import QuizItem from './components/QuizItem'
import AdminLayout from './layout/AdminLayout'

const ManageQuiz = () => {
    const questions = [
        { name: 'PHP Basics'}
    ]
    return (
        <AdminLayout>
            <Container maxW={"container.xl"}>
                <Heading py={5} fontWeight={500} fontSize={"2xl"} color={"gray.600"}>Manage Quiz</Heading>

                <Box mt={5}>
                    <Flex flexWrap={"wrap"} w={"100%"}>
                        { questions.map(() => <QuizItem />) }
                    </Flex>
                </Box>
            </Container>
        </AdminLayout>
    )
}

export default ManageQuiz