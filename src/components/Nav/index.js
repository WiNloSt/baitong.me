import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import styled from 'styled-components'

import logo from './assets/logo.png'

const NavContainer = styled.nav`
  a,
  a:visited {
    text-decoration: none;
    text-transform: uppercase;
    color: #808080;
    outline: none;

    :hover {
      color: #4d4d4d;
    }

    :active {
      color: #333;
    }
  }
`

const Logo = styled.img`
  width: 74.5px;
  height: 65px;

  @media (min-width: 30em) {
    width: 149px;
    height: 130px;
  }
`

export const Nav = ({ className }) => (
  <NavContainer className={`f6 ${className}`}>
    <div className="container flex flex-column flex-row-ns items-center justify-around">
      <Link to="/" className="mt3 mt0-ns order-1">
        Home
      </Link>
      <Link to="/" className="mt3 mt0-ns order-1">
        Portfolio
      </Link>
      <Link to="/" className="order-1-ns">
        <Logo src={logo} />
      </Link>
      <Link to="/" className="mt3 mt0-ns order-1">
        About
      </Link>
      <Link to="/" className="mt3 mt0-ns order-1">
        Contact
      </Link>
    </div>
  </NavContainer>
)

Nav.propTypes = {
  className: PropTypes.string
}
