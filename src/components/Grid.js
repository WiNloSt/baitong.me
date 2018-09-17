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
`

const Col = styled(({ maxColumns, center, ...props }) => <div {...props} />)`
  display: inline-block;
  vertical-align: top;
  width: ${props => props.width}px;
  width: ${({ maxColumns, columns }) => (columns / maxColumns) * 100 + '%'};
  margin-left: ${({ maxColumns, offset }) => (offset / maxColumns) * 100 + '%'};
  text-align: ${props => props.center && 'center'};
`

Grid.Col = Col
