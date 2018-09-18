import React from 'react'
import styled from 'styled-components'

import { Icon } from './Icon'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background: #cbcbcb;
`

export const Footer = () => (
  <FooterContainer className="pv3">
    <Icon.Facebook />
    <Icon.Behance />
  </FooterContainer>
)
