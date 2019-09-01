/* @jsx jsx */
import React from 'react'
import { Layout, Main, Styled, jsx } from 'theme-ui'
import './style.css'
import SEO from '../../components/SEO'
import { RainbowButton } from '../../components/RainbowButton'

export default Home

function Home() {
  return (
    <Layout>
      <Main>
        <SEO title="Home" />
        <Styled.h2>Baitong</Styled.h2>
        <Styled.p
          sx={{
            fontSize: 1,
            lineHeight: 'heading'
          }}>
          I am an UX/UI designer
        </Styled.p>
        <RainbowButton sx={{ marginTop: 4 }}>Resume</RainbowButton>
      </Main>
    </Layout>
  )
}
