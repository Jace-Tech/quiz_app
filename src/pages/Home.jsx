import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStudent } from '../api'
import Header from '../components/Header'
import { addUser } from '../store/slices/usersSlice'
import { showAlert } from '../utils'

const Home = () => {
	const {isOpen, onOpen, onClose} = useDisclosure()
	const [isLoading, setIsLoading] = useState(false)

	const [user, setUser] = useState({
		email: "",
		name: "", 
		password: ""
	})
	const [error, setError] = useState({
		input: null,
		message: "required"
	}) 
	const toast = useToast()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleCreateUser = async () => {
		// if(!user.email) setError(prevError => ({...prevError, input: "email"}))
		// if(!user.password) setError(prevError => ({...prevError, input: "password"}))
		// if(!user.name) setError(prevError => ({...prevError, input: "name"}))

		if(user.email && user.password && user.name) {
			setIsLoading(true)
			const result = await createStudent(user)
			setIsLoading(false)
			if("error" in result) {
				showAlert(toast, result.error, "error")
				return 
			}

			const data = {
				email: result.email,
				id: result.student_id,
				name: result.name
			}

			dispatch(addUser(data))
			showAlert(toast, "Account created!", "success")
			setUser({
				email: "",
				name: "", 
				password: ""
			})
			onClose()
			navigate("/onboard")
		}
	}

	useEffect(() => {
		const QUIZ = localStorage.getItem("QUIZ")
		if(QUIZ) {
			navigate("/endquiz")
		}
	}, [])

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
			<Box>
				<Container maxW={"container.lg"}>
					<Heading mt={8} fontSize={"5xl"} textAlign={"center"} fontWeight={200} color={"gray.600"}>Welcome to your weekly quiz</Heading>
					<Box mt={10} display={"flex"} alignItems={"center"} justifyContent={"center"}>
						<Button colorScheme={"green"} size={"lg"} onClick={onOpen}>Get Started</Button>
					</Box>
				</Container>
			</Box>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent mx={4}>
					<ModalHeader borderBottomWidth={1}> Create Account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<VStack gap={2} color={"gray.600"}>
							<FormControl flex={1}>
								<FormLabel fontSize={"sm"}>Full Name</FormLabel>
								<Input value={user.name} placeholder={"eg: John Doe"} borderColor={ error.input === "name" && "red.600"} onChange={e => setUser(prev => ({...prev, name: e.target.value }))}/>
								{/* {error.input === "name" && <Text fontSize={"sm"} mt={2} color={"red.600"}>{ error.message }</Text>} */}
							</FormControl>

							<FormControl flex={1}>
								<FormLabel fontSize={"sm"}>Email</FormLabel>
								<Input value={user.email} type={"email"} borderColor={ error.input === "email" && "red.600"} placeholder={"eg: johndoe@example.com"} onChange={e => setUser(prev => ({...prev, email: e.target.value }))}/>
								{/* {error.input === "email" && <Text fontSize={"sm"} mt={2} color={"red.600"}>{ error.message }</Text>} */}
							</FormControl>

							<FormControl flex={1}>
								<FormLabel fontSize={"sm"}>Password</FormLabel>
								<Input value={user.password} type={"password"} borderColor={ error.input === "password" && "red.600"} placeholder={"eg: *********"} onChange={e => setUser(prev => ({...prev, password: e.target.value }))}/>
								{/* {error.input === "password" && <Text fontSize={"sm"} mt={2} color={"red.600"}>{ error.message }</Text>} */}
							</FormControl>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button onClick={handleCreateUser} colorScheme='blue' mr={3}>
							Create
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default Home