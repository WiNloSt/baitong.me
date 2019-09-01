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

const Button = styled.button`
  outline: none;
  position: relative;
  background-color: white;
  border: 3px solid #bea7de;
  border-radius: 2em;
  transition: all 0.2s;

  &:hover {
    background-color: #bea7de;
  }

  @supports (background-clip: padding-box) {
    border-color: transparent;
    background-clip: padding-box;

    &:hover {
      background-color: transparent;
    }

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
      background-image: linear-gradient(to right, #bea7de 0%, #88d2d1);
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
  color: #bea7de;
  font-weight: bold;

  ${Button}:hover & {
    color: white;
  }

  @supports (-webkit-background-clip: text) and (-webkit-text-fill-color: transparent) {
    background-image: linear-gradient(to right, #bea7de 0%, #88d2d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${Button}:hover & {
      -webkit-text-fill-color: white;
    }
  }
`