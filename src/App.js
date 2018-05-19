import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { Nav } from './components/Nav'

injectGlobal`
  body {
    font-family: 'Tajawal', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #333;
  }

  strong {
    font-weight: bold;
  }
`

const AppStyles = styled.div`
  .container {
    max-width: 1200px;
    margin: auto;
  }

  .child-v-mid {
    > * {
      vertical-align: middle !important;
    }
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Nav className="mt4" />
      <div className="container pa3">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
