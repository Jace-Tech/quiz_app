import { Box, Button, Flex, Heading, Spinner, Text, useBoolean, VStack } from '@chakra-ui/react'
import React, {useState, useEffect, useContext} from 'react'
import Answer from '../components/Answer'
import Time from '../components/Time'
import { useCountdownTimer } from 'use-countdown-timer'

import { questionsData, shuffleArray } from '../data' 
import { MAX_SECONDS_PER_QUESTION } from '../utils'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addAnswer, clearAnswers } from '../store/slices/answerSlice'
import { addQuestions } from '../store/slices/questionSlice'
import { ResizeContext } from '../context/ResizeContext'

const QuestionPage = () => {
    const [questions, setQuestions] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { isMobile } = useContext(ResizeContext)
    
    const { start, countdown, pause, reset } = useCountdownTimer({  
        timer: 1000 * MAX_SECONDS_PER_QUESTION, 
        resetOnExpire: false, 
        onExpire: () =>  handleTimedOut()
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let isLastQuestion = (questions?.length - 1) === (currentIndex)
    let currentQuestion = questions?.[currentIndex]


    // Set Next Question Function
    const handleNext = () => {
        if(currentAnswer <= (questions.length - 1)) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    // Question Timeout Function
    const handleTimedOut = () => {
        const ansObject = {
            question: currentQuestion?.question,
            answer: "timed out",
            status: false
        }

        if(!isLastQuestion) {
            dispatch(addAnswer(ansObject))
            
            handleNext()
            reset()
            start()
        }
        else {
            dispatch(addAnswer(ansObject))
            
            // Pause the timer
            pause()

            // Trigger is Loading
            setIsLoading(true)

            setTimeout(() => {
                // Redirect to endquiz
                navigate("/endquiz")
            }, 5000)

        }
    }

    // Submit Current Question's Answer Function
    const handleSubmit = () => {

        const ansObject = {
            question: currentQuestion?.question,
            answer: currentQuestion?.answers?.[currentAnswer]?.answer,
        }

        if(!isLastQuestion){

            if(currentAnswer) {
                if(currentQuestion?.answers?.[currentAnswer]?.correct) {
                    ansObject.status = true
                    dispatch(addAnswer(ansObject))
                }
                else {
                    ansObject.status = false
                    dispatch(addAnswer(ansObject))
                }
    
                // Reset Answer State
                setCurrentAnswer(null)

                // Call Next Question
                handleNext()

                // Restart Timer
                reset()
                start()
            } 
            else { 
                setError("Please select one of the options")
            }
        }
        else {
            if(currentQuestion?.answers?.[currentAnswer]?.correct) {
                ansObject.status = true
                dispatch(addAnswer(ansObject))
            }
            else {
                ansObject.status = false
                dispatch(addAnswer(ansObject))
            }

            // Reset Answer State
            setCurrentAnswer(null)

            // Pause the timer
            pause()

            // Trigger the Loading Spinner
            setIsLoading(true)

            setTimeout(() => {
                // Redirect to endquiz
                navigate("/endquiz")
            }, 5000)

        } 
        
    }

    // Answer Selection Function
    const handleChoice = (ans = null) => {
        if(ans) {
            const index = currentQuestion?.answers.indexOf(ans)
            setCurrentAnswer(index.toString())
            setError(null)
        }
        else {
            setCurrentAnswer(ans)
        }
    }

    // Check taken quiz
    useEffect(() => {
        const hasWriten = localStorage.getItem("QUIZ_DATA")

        if(hasWriten.finished == 'true') {
            navigate("/")
        }
    }, [])

    // Set Questions
    useEffect(() => {
        setIsLoading(true)
        // Add is viewed property to questions
        let data = questionsData.map(question => ({...question, viewed: false}))

        // shuffle the questions 
        data = shuffleArray(data)

        // Add questions to store
        dispatch(addQuestions(data))

        // set questions
        setQuestions(data)

        // Clear Answers
        dispatch(clearAnswers())

        // Start Timer
        start()
    }, [])

    // Cancel is Loading
    useEffect(() => {
        setIsLoading(false)
    }, [questions])

    return (
        <Flex w={"100%"} flexWrap={"wrap"} h={"100%"} alignItems={"stretch"}>
            {
                isLoading && (
                    <Box position={"fixed"} d={"flex"} alignItems={"center"} justifyContent={"center"} zIndex={10} bgColor={"#fff"} opacity={.8} left={0} top={0} w={"100%"} height={"100%"}>
                        <Spinner size={"xl"} colorScheme={"blue"} />
                    </Box>
                )
            }

            {/* Left Side */}
            <Box minW={"400"} w={"100%"} maxW={"60%"} p={5} borderRightWidth={!isMobile && 1} borderBottomWidth={isMobile && 1} borderColor={"gray.200"}>
                <Flex justifyContent={"space-between"}>
                    <Heading fontSize={"2xl"} color={"gray.700"}>Jace Dev.</Heading>
                    { isMobile &&  <Time time={countdown} />}
                </Flex>

                <Box mt={"8vmax"}>
                    <Heading fontSize={"lg"} fontWeight={500} color={"gray.600"}>{ currentQuestion?.question }</Heading>
                </Box>
            </Box>

            {/* Right Side */}
            <Box flex={1} >
                <Flex justifyContent={"space-between"} borderBottomWidth={1} borderColor={"gray.200"} px={5} py={4}>
                    { !isMobile && <Time time={countdown} /> }

                    <Button onClick={handleSubmit} colorScheme={"gray"}>{ isLastQuestion ? "Finish" : "Next" }</Button>
                </Flex>

                <VStack px={5} gap={"1vmax"}>
                   <Text my={2} color={"red.600"} fontSize={"sm"} pt={2}>{ error || " " }</Text>
                    { 
                        currentQuestion?.answers?.map((answer, index) => (
                            <Answer 
                                key={index} 
                                error={error}
                                index={index} 
                                answer={answer} 
                                handleClick={handleChoice} 
                                selected={ currentAnswer == index }
                            />
                        ))
                    }
                </VStack>
            </Box>
        </Flex>
    )
}

export default QuestionPage