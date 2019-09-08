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
  background: #333;
  flex: 1;
  ${css({
    margin: 3
  })};
`

Grid.Item = Item
