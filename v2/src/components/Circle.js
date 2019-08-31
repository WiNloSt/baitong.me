import styled from 'styled-components'

export const Circle = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: linear-gradient(to right, #bf40f4 ${props => props.fill}%, #999 0%);
`
