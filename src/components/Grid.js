import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
const InternalGrid = ({ children, columns, className }) => (
  <div className={className}>
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
  width: ${props => props.width}%;
  width: ${({ maxColumns, columns }) => (columns / maxColumns) * 100 + '%'};
  text-align: ${props => props.center && 'center'};
`

Grid.Col = Col
