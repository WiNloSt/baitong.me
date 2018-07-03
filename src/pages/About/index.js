import React from 'react'
import styled from 'styled-components'

import profile from './assets/profile.png'
import { Progress as UnstyledProgress } from '../../components/Progress'

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  h1:first-child {
    margin-top: 1rem;
  }

  h1,
  h2 {
    font-size: 1.25rem;
    margin-top: 2rem;
  }

  ul {
    padding-left: 2rem;
  }

  li:not(:first-child) {
    margin-top: 0.25rem;
  }
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 0.25rem;

  @media only screen and (min-width: 768px) {
    width: auto;
    height: auto;
  }
`

const Center = styled.div`
  text-align: center;
`

const Column = styled.div`
  padding: 0.75rem;
  max-width: 600px;
  vertical-align: top;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: ${props => props.width || 50}%;
  }
`

const Paragraph = styled.p`
  text-indent: 3em;
  line-height: 1.5;
`

const FloatRight = styled.span`
  float: right;
  display: flex;
  align-items: center;
`

const Progress = styled(UnstyledProgress)`
  margin-right: 2rem;
`

export default () => (
  <Container className="pv3 pv4-ns">
    <Column width={40}>
      <Center>
        <Image src={profile} />
      </Center>
    </Column>
    <Column width={60}>
      <h1>ABOUT ME</h1>
      <Paragraph>
        Hello everyone, I am Natthapat. You can call me Baiton. Previously, I worked as a 2D artist
        at a game compnay for 1 and a half year. After that I worked as a producer for about 3 years
        at a game and animation company. I have managed and led more than 10 projects including the
        award-winning Crocodile museum with Ogilvy & Mather, Heroes Guardian and much more.
      </Paragraph>
      <div className="mb3 mt4">
        Adobe Illustrator
        <FloatRight>
          <Progress progress={90} />90%
        </FloatRight>
      </div>
      <div className="mv3">
        Adobe Photoshop
        <FloatRight>
          <Progress progress={90} />90%
        </FloatRight>
      </div>
      <div className="mv3">
        UX/UI
        <FloatRight>
          <Progress progress={50} />50%
        </FloatRight>
      </div>
      <div className="mv3">
        Microsoft Office<FloatRight>
          <Progress progress={50} />50%
        </FloatRight>
      </div>
      <div className="mv3">
        C++ / C#<FloatRight>
          <Progress progress={30} />30%
        </FloatRight>
      </div>
      <h2>SUMMARY OF QUALIFICATIONS</h2>
      <ul>
        <li>Outstanding coordinating and communication skills</li>
        <li>Strong leadership and team player skills</li>
        <li>Be able to formulate new ideas to solve problems</li>
        <li>Extensive customer service experiences</li>
        <li>Practical, reliable, flexible and friendly</li>
      </ul>
      <h2>EDUCATIONAL BACKGROUND</h2>
      <p>2010 - 2014</p>
      <p>Graduated from Silpakorn University</p>
      <p>Bachelor's degree in INformation and Communication Technology</p>
    </Column>
  </Container>
)
