/* @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { jsx } from 'theme-ui'

import { Container } from './Container'
import { IconLink } from './IconLink'

export function Footer() {
  return (
    // @ts-ignore
    <>
      <Divider />
      <Container>
        <FooterBody>
          <span sx={{ display: ['block', 'inline'], fontSize: [12, 14] }}>Baitong.me</span>
          <IconContainer>
            <IconLink
              to="https://www.facebook.com/Natthapattong-174414203275588/"
              name="facebook"
            />
            <IconLink to="https://www.behance.net/onatthapato" name="behance" />
            <IconLink to="https://dribbble.com/natthapat-tong" name="dribble" />
          </IconContainer>
        </FooterBody>
      </Container>
    </>
  )
}

const Divider = styled.div`
  margin: 0 auto;
  border-top: 1px solid #c4c4c4;

  ${css({
    width: [200, 450]
  })}
`

const FooterBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${css({
    flexDirection: ['column', 'row'],
    height: [96, 128]
  })}
`

const IconContainer = styled.div`
  ${css({
    marginTop: [2, 0],
    marginLeft: [0, 'auto']
  })}

  & > * + * {
    ${css({
      marginLeft: 2
    })}
  }
`
