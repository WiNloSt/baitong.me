import React from 'react'
import styled from 'styled-components'

import { Grid as UnstyledGrid } from '../../components/Grid'
import iconPattern from './assets/iconPattern.png'
import computer from './assets/computer@2x.png'
import girl from './assets/girl@2x.png'
import line from './assets/line.svg'
import paperPlain from './assets/paperPlain@2x.png'
import skills from './assets/skills@2x.png'
import brush from './assets/icons/brush@2x.png'
import graduate from './assets/icons/graduate@2x.png'
import pencil from './assets/icons/pencil@2x.png'
import web from './assets/icons/web@2x.png'
import { Icon } from '../../components/Icon'

const Grid = styled(UnstyledGrid)`
  @media only screen and (max-width: 479px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`

Grid.Col = UnstyledGrid.Col

const patternHeight = 200

const BackgroundHeader = styled.div`
  background-color: #ff87a4;
  background-size: 100px;
  background-image: url(${iconPattern});
  height: ${patternHeight * 1.5}px;

  @media only screen and (max-width: 479px) {
    height: ${patternHeight * 1}px;
  }
`

const Background = styled.div`
  position: relative;
  background-color: ${props => props.color};
  height: ${props => props.height}px;
`

const ComputerBackground = styled(Background)`
  height: 228px;

  @media only screen and (max-width: 479px) {
    height: 150px;
  }
`

const Computer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
  max-width: 652px;
  width: 100%;

  @media only screen and (max-width: 479px) {
    bottom: 50px;
    width: 80%;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    background-position: center;
    background-image: url(${computer});
    background-size: contain;
    width: 100%;
    padding-bottom: 44.48%;
  }
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

// eslint-disable-next-line react/prop-types
const Header = ({ title }) => (
  <Grid columns={16}>
    <Grid.Col offset={7}>
      <h2>{title}</h2>
    </Grid.Col>
  </Grid>
)

const AboutMeIcon = styled.i`
  display: block;
  width: 48px;
  height: 48px;
  background-image: url(${props => props.icon});
  background-size: contain;
`

const AboutMeBlock = styled(Grid.Col)`
  margin-left: 12px;
  line-height: 1.5;
  max-width: 220px;

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

  p {
    margin-bottom: 0;
  }
`

// eslint-disable-next-line react/prop-types
const AboutMe = ({ icon, header, children }) => (
  <React.Fragment>
    <Grid.Col width={48}>
      <AboutMeIcon icon={icon} />
    </Grid.Col>
    <AboutMeBlock style={{ marginBottom: 20 }}>
      <h3>{header}</h3>
      {children}
    </AboutMeBlock>
  </React.Fragment>
)

const Footer = styled.footer`
  height: 100px;
  background-color: #363636;

  > div {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    width: 100%;

    > p {
      color: white;
    }

    .icon:not(:last-child) {
      margin-right: 28px;
    }
  }
`

const AboutMeGrid = styled(Grid)`
  &:not(:first-child) {
    @media only screen and (min-width: 720px) {
      margin-top: 40px;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 719px) {
    flex-direction: column;

    > ${Grid.Col} {
      width: 100%;
      margin-left: 0;
      padding-left: 18.75%;
    }
  }
`

export default () => (
  <React.Fragment>
    <BackgroundHeader />
    <ComputerBackground color="#FFF3F6">
      <Computer />
    </ComputerBackground>
    <Background color="#F2DBFF">
      <Segment>
        <Header title="PORTFOLIO" />
        <Grid columns={16}>
          <Grid.Col offset={3} columns={4} verticalAlign="middle">
            <h3 className="decorated">LET'S SEE MY WORK</h3>
            <p className="indent">
              I create my arts from many inspirations with dedication. I made different styles of
              arts to pratice and improve my skills. I hope my artworks will inspire you and hope
              you love my works. Thank you!
            </p>
          </Grid.Col>
          <Grid.Col columns={7} center>
            <img src={girl} style={{ width: '100%', maxWidth: 450 }} />
          </Grid.Col>
        </Grid>
      </Segment>
    </Background>
    <Background color="#FFE338">
      <Segment>
        <Header title="ABOUT ME" />
        <div>
          <AboutMeGrid columns={16}>
            <Grid.Col offset={3} columns={4}>
              <AboutMe icon={brush} header="Design">
                <p>
                  Photoshop
                  <br />
                  Illustration
                  <br />
                  UI / UX
                  <br />
                  Web design
                  <br />
                  Graphic design
                </p>
              </AboutMe>
            </Grid.Col>
            <Grid.Col offset={2}>
              <AboutMe icon={graduate} header="Education">
                <p>
                  2010 - 2014
                  <br />
                  Silpakorn University
                  <br />
                  <br />
                  Bachelor's degree in Information and Communication Technology
                </p>
              </AboutMe>
            </Grid.Col>
          </AboutMeGrid>
          <AboutMeGrid columns={16}>
            <Grid.Col offset={3} columns={4}>
              <AboutMe icon={pencil} header="Skills">
                <img src={skills} width={225} style={{ marginTop: 18 }} />
              </AboutMe>
            </Grid.Col>
            <Grid.Col offset={2} columns={4}>
              <AboutMe icon={web} header="Website">
                <p>
                  Web : Baitong.me
                  <br />
                  Behance :{' '}
                  <a href="https://www.behance.net/onatthapato/" target="_blank">
                    onatthapato
                  </a>
                  <br />
                  Facebook :{' '}
                  <a href="https://www.facebook.com/Natthapattong-174414203275588/" target="_blank">
                    Natthapat.tong
                  </a>
                  <br />
                  Dribble :{' '}
                  <a href="https://dribbble.com/natthapat-tong" target="_blank">
                    onatthapato
                  </a>
                </p>
              </AboutMe>
            </Grid.Col>
          </AboutMeGrid>
        </div>
      </Segment>
    </Background>
    <Background color="#FBF3FF">
      <Segment>
        <Header title="EXPERIENCES" />
        <Grid columns={16}>
          <Grid.Col offset={3} columns={4}>
            <h3>
              PRODUCER
              <br />
              2015 - 2018 at Teapot Studio
            </h3>
            <p>
              - Manage project from conception
              <br />
              through deployment, and act as both <br />a customer partnet and an internal <br />
              team leader.
              <br />
              <br />- Manage daily project assignments, <br />
              provide team direction and lead team <br />
              meeting to complete projects with clear <br />
              objectives, agendas and outcomes.
              <br />
              <br />- Coordinate between different internal <br />
              teams to ensure high work quality and <br />
              consistency.
            </p>
          </Grid.Col>
          <Grid.Col columns={3} verticalAlign="bottom">
            <img src={paperPlain} width={173} />
          </Grid.Col>
          <Grid.Col columns={4} verticalAlign="bottom">
            <h3>
              2D ARTIST
              <br />
              2014 - 2015 at Teapot Studio
            </h3>
            <p>
              - Produce high quality artworks following <br /> UI/UX standards.
              <br />
              <br />- Create and deliver artworks to customers <br />
              according to requirements.
              <br />
            </p>
          </Grid.Col>
        </Grid>
      </Segment>
    </Background>
    <Footer>
      <div>
        <p>baitong.me</p>
        <div>
          <Icon.Facebook color="#9a9a9a" />
          <Icon.Behance color="#9a9a9a" />
        </div>
      </div>
    </Footer>
  </React.Fragment>
)
