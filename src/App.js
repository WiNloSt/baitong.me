import React from 'react'
import { Router, Route, Switch } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import { Nav } from './components/Nav'
import { Helmet } from 'react-helmet'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

const AppStyle = styled.div`
  &:not(.v2) {
    font-family: 'Fira Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 14px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 14px;
    }
  }

  &.v2 {
    font-family: 'Tajawal', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #333;
    background: #f2f2f2;
    border: 1px solid transparent;

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
  }
`

const App = () => (
  <Router>
    <div>
      <Route>
        {({ location }) => {
          const isV2 = location.pathname.startsWith('/v2')
          return (
            <AppStyle className={isV2 ? 'v2' : ''}>
              <Switch>
                <Route
                  path="/v2"
                  render={() => (
                    <React.Fragment>
                      <Helmet>
                        <link
                          rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css"
                        />
                      </Helmet>
                      <Nav className="mt3 mt4-ns" />
                    </React.Fragment>
                  )}
                />
                <Route render={() => <nav>nav ของ v1 นาka</nav>} />
              </Switch>
              <Routes />
            </AppStyle>
          )
        }}
      </Route>
    </div>
  </Router>
)

export default hot(module)(App)
