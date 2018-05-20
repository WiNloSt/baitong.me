import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from './Link'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background: #cbcbcb;
`

const IconContainer = styled.div`
  border: 0.25em solid white;
  border-radius: 50%;
  padding: 0.4em;
  width: 3.75rem;
  height: 3.75rem;
`

const I = styled.i`
  transform: ${props => `translate(${props.x}, ${props.y})`};
`

const Icon = ({ className, name, x = 0, y = 0 }) => (
  <IconContainer className={className}>
    <I x={x + 'px'} y={y + 'px'} className={`fab fa-${name} white f2`} />
  </IconContainer>
)

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
}

export const Footer = () => (
  <FooterContainer className="pv3">
    <Link to="https://www.facebook.com/Natthapattong-174414203275588/" target="_blank">
      <Icon name="facebook-f" x={10} y={2} />
    </Link>
    <Link to="https://www.behance.net/onatthapato" target="_blank">
      <Icon className="ml4" name="behance" x={1} y={1} />
    </Link>
  </FooterContainer>
)
