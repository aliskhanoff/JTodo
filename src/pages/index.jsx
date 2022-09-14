import React from 'react'
import { Router } from '@reach/router'
import { Index, NotFound } from './home'

export const AnonymouseRoute = () => {

  return (
    <Router>
        <Index path="/" />
        <NotFound path="/notfound" default />
    </Router>
  )
}

export default AnonymouseRoute