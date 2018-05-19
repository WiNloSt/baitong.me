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

export const Nav = ({ className }) => (
  <NavContainer className={`f3 ${className}`}>
    <div className="container flex items-center justify-around">
      <Link to="/">Home</Link>
      <Link to="/">Portfolio</Link>
      <img src={logo} />
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
    </div>
  </NavContainer>
)

Nav.propTypes = {
  className: PropTypes.string
}
