import React from 'react'
import styled from 'styled-components'

import { RabbitIcon } from '../../components/RabbitIcon'
import { Link } from '../../components/Link'
import RenderAfterMount from '../../components/RenderAfterMount'

const AppStyle = styled.div`
  font-family: 'Tajawal', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica,
    Arial, 'Lucida Grande', sans-serif;
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
`

export default () => (
  <RenderAfterMount>
    <AppStyle>
      <div className="container pv3 pv5-ns">
        <h1 className="tc normal f3 f2-ns">
          Sorry... We can't find that carrot you're looking for.{' '}
          <Link to="/" className="nowrap">
            <i className="fas fa-home mr2" />
            Back home
          </Link>
        </h1>
        <div className="w-80 w-50-ns center mt3">
          <RabbitIcon fill="pink" />
        </div>
      </div>
    </AppStyle>
  </RenderAfterMount>
)
