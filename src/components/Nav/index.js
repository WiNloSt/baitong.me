import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from './assets/logo.png'
import { Link } from '../Link'

const Logo = styled.img`
  width: 74.5px;
  height: 65px;

  @media (min-width: 30em) {
    width: 149px;
    height: 130px;
  }
`

export const Nav = ({ className }) => (
  <div className={`f6 ${className}`}>
    <div className="container flex flex-column flex-row-ns items-center justify-around">
      <Link to="/" className="mt3 mt0-ns order-1">
        HOME
      </Link>
      <Link to="/portfolio" className="mt3 mt0-ns order-1">
        PORTFOLIO
      </Link>
      <Link to="/" className="order-1-ns">
        <Logo src={logo} />
      </Link>
      <Link to="/about" className="mt3 mt0-ns order-1">
        ABOUT
      </Link>
      <Link to="/contact" className="mt3 mt0-ns order-1">
        CONTACT
      </Link>
    </div>
  </div>
)

Nav.propTypes = {
  className: PropTypes.string
}
