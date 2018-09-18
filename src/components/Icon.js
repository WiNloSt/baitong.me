import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as UnstyledLink } from 'react-static'

const Link = styled(UnstyledLink)`
  text-decoration: none;
  &:visited {
    color: transparent;
  }
`

const IconContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-size-adjust: 100%;
  font-size: 30px;
  font-weight: 300;
  box-sizing: border-box;
  color: ${({ color = 'white' }) => color};
  border: 4px solid ${({ color = 'white' }) => color};
  border-radius: 50%;
  padding: 6px;
  width: 60px;
  height: 60px;
`

const I = styled.i`
  transform: ${props => `translate(${props.x}, ${props.y})`};
`

export const Icon = ({ className, color, name, x = 0, y = 0 }) => (
  <IconContainer className={className} color={color}>
    <I x={x + 'px'} y={y + 'px'} className={`fab fa-${name}`} />
  </IconContainer>
)

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
}

const Facebook = props => (
  <Link
    to="https://www.facebook.com/Natthapattong-174414203275588/"
    target="_blank"
    className="icon">
    <Icon name="facebook-f" {...props} />
  </Link>
)

const Behance = props => (
  <Link to="https://www.behance.net/onatthapato" target="_blank" className="icon">
    <Icon name="behance" {...props} />
  </Link>
)

Icon.Facebook = Facebook
Icon.Behance = Behance
