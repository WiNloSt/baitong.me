import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faBehance } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'
import css from '@styled-system/css'

/**
 *
 * @param {object} props
 * @param {string} props.to
 * @param {'dribble' | 'behance' | 'facebook'} props.name
 */
export function IconLink({ to, name }) {
  return (
    <a href={to} target="_blank">
      <Icon name={name} />
    </a>
  )
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
          color: '#414042',
          verticalAlign: 'middle'
        }}
        size="3x"
      />
    )
  }

  if (name === 'facebook') {
    return (
      <FontAwesomeIcon
        icon={faFacebook}
        style={{
          color: '#414042',
          verticalAlign: 'middle'
        }}
        size="3x"
      />
    )
  }

  if (name === 'behance') {
    return (
      <Circle
        style={{
          verticalAlign: 'middle'
        }}>
        <FontAwesomeIcon
          icon={faBehance}
          style={{
            color: '#414042',
            fontSize: 24,
            transform: 'translate(5px, 6px)'
          }}
        />
      </Circle>
    )
  }

  throw Error('icon not found')
}

const Circle = styled.div`
  display: inline-block;
  border-radius: 50%;
  height: 42px;
  width: 42px;
  border-width: 3px;
  border-style: solid;
  box-sizing: border-box;

  ${css({
    borderColor: '#414042'
  })}
`
