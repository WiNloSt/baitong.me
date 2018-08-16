import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from './assets/logo.png'
import { Link } from '../Link'
import { withRouter } from 'react-static'

const Logo = styled.img`
  width: 74.5px;
  height: 65px;

  @media (min-width: 30em) {
    width: 149px;
    height: 130px;
  }
`

const Component = ({ className, match }) => (
  <div className={`f6 ${className}`}>
    <div className="container flex flex-column flex-row-ns items-center justify-around">
      <Link to={`${match.path}/`} className="mt3 mt0-ns order-1">
        HOME
      </Link>
      <Link to={`${match.path}/portfolio`} className="mt3 mt0-ns order-1">
        PORTFOLIO
      </Link>
      <Link to={`${match.path}/`} className="order-1-ns">
        <Logo src={logo} />
      </Link>
      <Link to={`${match.path}/about`} className="mt3 mt0-ns order-1">
        ABOUT
      </Link>
      <Link to={`${match.path}/contact`} className="mt3 mt0-ns order-1">
        CONTACT
      </Link>
    </div>
  </div>
)

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.object
}

export const Nav = withRouter(Component)
