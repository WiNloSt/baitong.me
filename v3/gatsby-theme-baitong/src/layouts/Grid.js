import styled from '@emotion/styled'
import css from '@styled-system/css'
import { Flex } from './Flex'

export const Grid = styled(Flex)`
  flex-wrap: wrap;
  ${css({ margin: -3 })}
`

const Item = styled.div`
  width: 100%;
  height: 100px;
  min-width: 250px;
  background: #aaa;
  flex: 1 1 0;
  transition: filter 0.15s;
  ${css({
    margin: 3
  })};

  &:hover {
    filter: brightness(50%);
  }
`

Grid.Item = Item
