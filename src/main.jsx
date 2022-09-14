import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './app'
import './i18n'
import './styles/global.scss'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={ queryClient }>
      <App />
  </QueryClientProvider>
)
