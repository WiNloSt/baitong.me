import React from 'react'
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
    <Container {...props}>{progressArray.map(progress => <Circle fill={progress} />)}</Container>
  )
}
