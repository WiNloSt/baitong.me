// import React from 'react'
import styled from '@emotion/styled'

const CTALinkButton = styled.a`
  /* inline-block so margins work */
  text-decoration: none;
  display: inline-block;
  color: white;
  background: linear-gradient(90deg, #cc016f -28.97%, #4d0eff 127.03%);
  font-size: 1rem;
  line-height: 1.625;
  padding: 0.5em 2.5em;
  border-radius: 0.5em;
`

CTALinkButton.defaultProps = {
  target: '_blank',
}

export default CTALinkButton
// export default function CTAButton() {

// }
