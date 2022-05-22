import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import GlobalContextProvider from './context/GlobalContext'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalContextProvider>
                <ChakraProvider>
                    <Router>
                        <App />
                    </Router>
                </ChakraProvider>
            </GlobalContextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
