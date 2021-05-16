import styled from '@emotion/styled'
import css from '@styled-system/css'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${css({ margin: -3 })}

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    ${css({
      margin: 0,
      gap: 4,
    })}
  }
`

const Item = styled.div`
  min-width: 250px;
  width: 100%;
  flex: 1 1 0px;
  transition: filter 0.15s;
  cursor: pointer;

  ${css({
    margin: 3,
  })};

  @supports (display: grid) {
    margin: 0;
  }

  &:hover {
    filter: brightness(50%);
  }
`

Grid.Item = Item
