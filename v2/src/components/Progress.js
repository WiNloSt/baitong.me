import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Circle as UnstyledCircle } from './Circle'

const Container = styled.div`
  display: inline-block;
`

const Circle = styled(UnstyledCircle)`
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`

export const Progress = ({ progress, ...props }) => {
  const progressArray = Array(Math.floor(progress / 20))
    .fill(100)
    .concat(((progress % 20) / 20) * 100)
  return (
    <Container {...props}>
      {progressArray.map((progress, index) => (
        <Circle fill={progress} key={index} />
      ))}
    </Container>
  )
}

Progress.propTypes = {
  progress: PropTypes.number
}
