import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'

export function RainbowButton({ children, className, ...props }) {
  return (
    <Button className={className}>
      <RainbowText>{children}</RainbowText>
    </Button>
  )
}

const Button = styled('button')`
  position: relative;
  background: white;
  border: 3px solid black;
  border-radius: 2em;
  @supports (background-clip: padding-box) {
    border-color: transparent;
    background-clip: padding-box;

    &:before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: -3px;
      border-radius: inherit;
      background: linear-gradient(to right, #bea7de 0%, #88d2d1);
    }
  }
  ${css({
    padding: theme => `${theme.space[2]}px ${theme.space[4]}px`
  })}
`

const RainbowText = styled.span`
  ${css({
    fontSize: 0
  })}
  color: black;
  font-weight: bold;
  @supports (-webkit-background-clip: text) and (-webkit-text-fill-color: transparent) {
    background: linear-gradient(to right, #bea7de 0%, #88d2d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
