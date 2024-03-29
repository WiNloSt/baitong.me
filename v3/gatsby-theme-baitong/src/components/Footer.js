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
          <span sx={{ display: ['block', 'inline'], fontSize: [12, 14], marginTop: [3, 0] }}>
            Baitong.me
          </span>
          <IconContainer
            sx={{
              display: 'flex',
              gap: '12px',
            }}>
            <IconLink to="https://www.linkedin.com/in/natthapat/" name="linkedin" />
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
    width: [200, 450],
  })}
`

const FooterBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${css({
    flexDirection: ['column', 'row'],
    height: [128, 128],
  })}
`

const IconContainer = styled.div`
  ${css({
    marginTop: [12, 0],
    marginLeft: [0, 'auto'],
  })}
`
