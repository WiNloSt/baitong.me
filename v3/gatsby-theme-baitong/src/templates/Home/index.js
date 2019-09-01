/* @jsx jsx */
import React from 'react'
import { Layout, Main, Styled, jsx } from 'theme-ui'
import './style.css'
import SEO from '../../components/SEO'
import { RainbowButton } from '../../components/RainbowButton'
import profilePicture from './assets/profilePicture.svg'
import { Flex } from '../../layouts/Flex'

export default Home

function Home() {
  return (
    <Layout>
      <Main>
        <Flex sx={{ marginTop: 130 }}>
          <div sx={{ marginTop: 100 }}>
            <SEO title="Home" />
            <Styled.h2 sx={{ margin: 0 }}>Baitong</Styled.h2>
            <Styled.p
              sx={{
                fontSize: 1,
                lineHeight: 'heading'
              }}>
              I am an UX/UI designer
            </Styled.p>
            <RainbowButton sx={{ marginTop: 4 }}>Resume</RainbowButton>
          </div>
          <img sx={{ marginLeft: 'auto' }} src={profilePicture} />
        </Flex>
      </Main>
    </Layout>
  )
}
