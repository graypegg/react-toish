import * as React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import PageHome from './App/PageHome/PageHome'

function RouterContainer (): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/" component={ PageHome } />
    </BrowserRouter>
  )
}

export default RouterContainer