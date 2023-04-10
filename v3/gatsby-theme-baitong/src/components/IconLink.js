import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faBehance, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'
import css from '@styled-system/css'

/**
 *
 * @param {object} props
 * @param {string} props.to
 * @param {'dribble' | 'behance' | 'facebook' | 'linkedin'} props.name
 */
export function IconLink({ to, name }) {
  return (
    <a href={to} target="_blank">
      <Icon name={name} />
    </a>
  )
}

const iconSize = 32
const COLOR = '#aaa'

const defaultStyle = {
  color: COLOR,
  fontSize: iconSize,
}

/**
 *
 * @param {object} props
 * @param {'dribble' | 'behance' | 'facebook'} props.name
 */
function Icon({ name }) {
  if (name === 'dribble') {
    return (
      <FontAwesomeIcon
        icon={faDribbble}
        style={{
          ...defaultStyle,
          verticalAlign: 'middle',
        }}
      />
    )
  }

  if (name === 'facebook') {
    return (
      <FontAwesomeIcon
        icon={faFacebook}
        style={{
          ...defaultStyle,
          verticalAlign: 'middle',
        }}
        size="3x"
      />
    )
  }

  if (name === 'behance') {
    return (
      <Circle
        style={{
          verticalAlign: 'middle',
          lineHeight: 1.6,
        }}>
        <FontAwesomeIcon
          icon={faBehance}
          style={{
            ...defaultStyle,
            fontSize: 20,
            transform: 'translate(3px, 4px)',
          }}
        />
      </Circle>
    )
  }

  if (name === 'linkedin') {
    return (
      <Circle
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          style={{
            ...defaultStyle,
            fontSize: 20,
          }}
        />
      </Circle>
    )
  }

  throw Error('icon not found')
}

const Circle = styled.div`
  outline: none;
  display: inline-block;
  border-radius: 50%;
  border-color: ${COLOR};
  height: ${iconSize}px;
  width: ${iconSize}px;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
`
