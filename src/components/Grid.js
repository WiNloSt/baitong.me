import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const InternalGrid = ({ children, columns, className, style }) => (
  <div className={className} style={style}>
    {React.Children.map(
      children,
      child =>
        typeof child.type !== 'string' ? React.cloneElement(child, { maxColumns: columns }) : child
    )}
  </div>
)

export const Grid = styled(InternalGrid)`
  position: relative;
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 479px) {
    flex-direction: column;
  }
`

const alignSelfMap = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end'
}

const Col = styled.div`
  display: inline-block;
  vertical-align: ${({ verticalAlign = 'top' }) => verticalAlign};
  align-self: ${props => alignSelfMap[props.verticalAlign] || 'flex-start'};
  text-align: ${props => props.center && 'center'};
  box-sizing: border-box;

  @media only screen and (max-width: 479px) {
    width: 100%;
    margin-left: 0;
  }

  width: ${props => props.width}px;
  width: ${({ maxColumns, columns }) => (columns / maxColumns) * 100 + '%'};
  margin-left: ${({ maxColumns, offset }) => (offset / maxColumns) * 100 + '%'};
`

Grid.Col = Col
