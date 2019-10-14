import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Flex } from './Flex'

export const Grid = styled(Flex)`
  flex-wrap: wrap;
  ${css({ margin: -3 })}
`

const Item = styled.div`
  min-width: 250px;
  width: 100%;
  flex: 1 1 0px;
  transition: filter 0.15s;
  cursor: pointer;

  ${css({
    margin: 3
  })};

  &:hover {
    filter: brightness(50%);
  }
`

Grid.Item = Item
