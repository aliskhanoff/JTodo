import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { TodoProvider } from './context'
import './i18n'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(<TodoProvider><App /></TodoProvider>)
