import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query'
import Layout from './components/layouts/layout';
import { AnonymouseRoute } from './pages';


export const App = () => {

  return(
  <React.Fragment>
      <QueryClientProvider client={ new QueryClient() }>
        <Layout>
          <AnonymouseRoute />
        </Layout>
      </QueryClientProvider>
  </React.Fragment>)
}

export default App

