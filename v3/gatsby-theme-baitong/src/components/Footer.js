import React from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'

import { Container } from './Container'
import { IconLink } from './IconLink'

export function Footer() {
  return (
    <FooterLayout>
      <Container>
        <FooterBody>
          <span style={{ fontSize: 18 }}>Baitong.me</span>
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
    </FooterLayout>
  )
}

const FooterLayout = styled.div`
  ${css({
    backgroundColor: 'lessWhite'
  })}
`

const FooterBody = styled.div`
  display: flex;
  align-items: center;

  ${css({
    lineHeight: 3
  })}
`

const IconContainer = styled.div`
  margin-left: auto;

  & > * + * {
    ${css({
      marginLeft: 2
    })}
  }
`
