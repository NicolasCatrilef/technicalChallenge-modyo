import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store'
import { Provider } from 'react-redux'
import Home from './views/Home/Home'
import { ChakraProvider } from '@chakra-ui/react'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </Provider>,
)
