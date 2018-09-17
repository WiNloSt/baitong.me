import React from 'react'
import styled from 'styled-components'

import { Grid } from '../../components/Grid'
import iconPattern from './assets/iconPattern.png'
import computer from './assets/computer@2x.png'
import girl from './assets/girl@2x.png'
import line from './assets/line.svg'
import skills from './assets/skills@2x.png'
import brush from './assets/icons/brush@2x.png'
import graduate from './assets/icons/graduate@2x.png'
import pencil from './assets/icons/pencil@2x.png'
import web from './assets/icons/web@2x.png'

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
  background-size: contain;
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

const Icon = styled.i`
  display: block;
  width: 48px;
  height: 48px;
  background-image: url(${props => props.icon});
  background-size: contain;
`

const AboutMeBlock = styled(Grid.Col)`
  margin-left: 12px;
  line-height: 1.5;

  h3 {
    position: relative;
    margin-top: 8px;
    font-weight: normal;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 140px;
      height: 5px;
      background-image: url(${line});
      left: 0;
      bottom: -6px;
    }
  }
`

// eslint-disable-next-line react/prop-types
const AboutMe = ({ icon, header, children }) => (
  <React.Fragment>
    <Grid.Col width={48}>
      <Icon icon={icon} />
    </Grid.Col>
    <AboutMeBlock>
      <h3>{header}</h3>
      {children}
    </AboutMeBlock>
  </React.Fragment>
)

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
          <Grid.Col offset={7}>
            <h2>PORTFOLIO</h2>
          </Grid.Col>
        </Grid>
        <Grid columns={16}>
          <Grid.Col offset={3} columns={4}>
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
            <img src={girl} width={450} />
          </Grid.Col>
        </Grid>
      </Segment>
    </Background>
    <Background color="#FFE338">
      <Segment>
        <Grid columns={16}>
          <Grid.Col offset={7}>
            <h2>ABOUT ME</h2>
          </Grid.Col>
        </Grid>
        <Grid columns={16}>
          <Grid.Col offset={3} columns={4}>
            <AboutMe icon={brush} header="Design">
              <div>
                Photoshop
                <br />
                Illustration
                <br />
                UI / UX
                <br />
                Web design
                <br />
                Graphic design
              </div>
            </AboutMe>
          </Grid.Col>
          <Grid.Col offset={2} columns={4}>
            <AboutMe icon={graduate} header="Education">
              <div>
                2010 - 2014
                <br />
                Silpakorn University
                <br />
                <br />
                Bachelor's degree in Information and <br />
                Communication Technology
              </div>
            </AboutMe>
          </Grid.Col>
        </Grid>
        <Grid columns={16} style={{ marginTop: 40 }}>
          <Grid.Col offset={3} columns={4}>
            <AboutMe icon={pencil} header="Skills" />
            <img src={skills} width={225} style={{ marginTop: 18 }} />
          </Grid.Col>
          <Grid.Col offset={2} columns={4}>
            <AboutMe icon={web} header="Website">
              <div>
                Web : Baitong.me
                <br />
                Behance :{' '}
                <a href="https://www.behance.net/onatthapato/" target="_blank">
                  onatthapato
                </a>
                <br />
                Facebook :{' '}
                <a href="https://www.facebook.com/onatthapato" target="_blank">
                  Natthapat.tong
                </a>
                <br />
                Dribble :{' '}
                <a href="https://dribbble.com/natthapat-tong" target="_blank">
                  onatthapato
                </a>
              </div>
            </AboutMe>
          </Grid.Col>
        </Grid>
      </Segment>
    </Background>
    <Background color="#FBF3FF">X</Background>
    <Background color="#F2DBFF">X</Background>
    <Footer>X</Footer>
  </React.Fragment>
)
