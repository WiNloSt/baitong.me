import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

injectGlobal`
  body {
    font-family: 'Tajawal', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #333;
    background: #f2f2f2;
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

  .flex-0 {
    flex: 0;
  }

  .flex-1 {
    flex: 1;
  }

  .flex-2 {
    flex: 2;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Nav className="mt3 mt4-ns" />
      <div>
        <Routes />
      </div>
      <Footer />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
