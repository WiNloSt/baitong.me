import React from 'react'
import styled from 'styled-components'

import bg from './assets/bg.png'
import photo from './assets/photo.png'

const ImageBackgroundContainer = styled.div`
  position: relative;
  height: 700px;
`

const Photo = styled.div`
  position: relative;
  width: 528px;
  height: 298px;
  background-image: url(${photo});
  user-select: none;
  transform: translateX(-50%);
  left: 50%;
  top: 70px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(100px, 125px);
    box-shadow: 0em 0em 0px 6px rgb(255, 255, 255, 0.6);
  }
`

export default () => (
  <div>
    <ImageBackgroundContainer>
      <img src={bg} alt="" className="absolute" />
      <Photo src={photo} alt="" className="absolute" />
    </ImageBackgroundContainer>
  </div>
)
