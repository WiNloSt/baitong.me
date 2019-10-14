import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Flex } from './Flex'

export const Grid = styled(Flex)`
  flex-wrap: wrap;
  ${css({ margin: -3 })}
`

const Item = styled.div`
  /* debug style */
  min-width: 250px;
  /* end debug style */
  width: 100%;
  flex: 1 1 0px;
  transition: filter 0.15s;
  ${css({
    margin: 3
  })};

  &:hover {
    filter: brightness(50%);
  }
`

Grid.Item = Item
