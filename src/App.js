import React from 'react'
import { Router, Route } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
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
    background: #f2f2f2;
  }

  strong {
    font-weight: bold;
  }

  .text-black {
    color: #333;
  }

  .text-grey {
    color: #808080;
  }

  .text-light-grey {
    color: #b3b3b3;
  }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
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
    <div>
      <Route path="/v2" render={() => <Nav className="mt3 mt4-ns" />} />
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
