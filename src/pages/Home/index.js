import React from 'react'
import styled from 'styled-components'

import bg from './assets/bg.png'
import photo from './assets/photo.png'

const FirstSection = styled.div`
  position: relative;
`

const Bg = styled.img`
  transform: translateX(-50%);
  left: 50%;
`

const Photo = styled.img`
  width: 100%;
  max-width: 45.2910959%; // 529 / (1200 - 16 * 2)
  user-select: none;
  transform: translateX(-50%);
  left: 50%;
  top: 10%;
  box-shadow: 10rem 10em 0px 6px rgb(255, 255, 255, 0.6);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(100px, 125px);
  }
`

export default () => (
  <div className="container pa3">
    <FirstSection>
      <Bg src={bg} alt="" className="relative" />
      <Photo src={photo} alt="" className="absolute" />
    </FirstSection>
  </div>
)
