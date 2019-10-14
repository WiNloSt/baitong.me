/* @jsx jsx */
// @ts-ignore
import React from 'react'
import { Container as ThemeUiContainer, jsx } from 'theme-ui'
/**
 *
 * @param {object} props
 * @param {import('react').ReactElement} props.children
 * @param {string=} props.className
 */
export function Container({ children, className }) {
  return (
    <div
      sx={{
        marginLeft: [30, 60],
        marginRight: [30, 60]
      }}
      className={className}>
      <ThemeUiContainer>{children}</ThemeUiContainer>
    </div>
  )
}
