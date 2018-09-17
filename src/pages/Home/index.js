import React from 'react'
import styled from 'styled-components'

import iconPattern from './assets/iconPattern.png'
import computer from './assets/computer.png'
import girl from './assets/girl.png'
import { Grid } from '../../components/Grid'

const patternHeight = 201

const BackgroundHeader = styled.div`
  background-color: #ff87a4;
  background-image: url(${iconPattern});
  height: ${patternHeight * 1.5}px;
`

const Background = styled.div`
  position: relative;
  background-color: ${props => props.color};
  height: ${props => props.height}px;
`

const Computer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
  background-position: center;
  background-image: url(${computer});
  width: 652px;
  height: 290px;
`

const Segment = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #444a7c;
  line-height: 1.43;

  h2 {
    margin-top: 0;
    text-align: center;
  }

  .decorated {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      display: block;
      width: 30px;
      border-bottom: 3px solid #42487d;
    }
  }

  .indent {
    text-indent: 2rem;
  }
`

Segment.defaultProps = {
  className: 'container'
}

const VerticalCenterRestSpace = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const Footer = styled.footer`
  background-color: #acadad;
`

export default () => (
  <React.Fragment>
    <BackgroundHeader />
    <Background color="#FFF3F6" height={228}>
      <Computer />
    </Background>
    <Background color="#F2DBFF">
      <Segment>
        <Grid columns={16}>
          <Grid.Col columns={7} />
          <h2>PORTFOLIO</h2>
        </Grid>
        <Grid columns={16}>
          <Grid.Col columns={3} />
          <Grid.Col columns={4}>
            <VerticalCenterRestSpace>
              <h3 className="decorated">LET'S SEE MY WORK</h3>
              <p className="indent">
                I create my arts from many inspirations with dedication. I made different styles of
                arts to pratice and improve my skills. I hope my artworks will inspire you and hope
                you love my works. Thank you!
              </p>
            </VerticalCenterRestSpace>
          </Grid.Col>
          <Grid.Col columns={7} center>
            <img src={girl} />
          </Grid.Col>
        </Grid>
      </Segment>
    </Background>
    <Background color="#FFE338">X</Background>
    <Background color="#FBF3FF">X</Background>
    <Background color="#F2DBFF">X</Background>
    <Footer>X</Footer>
  </React.Fragment>
)
