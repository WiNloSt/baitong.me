/* @jsx jsx */
import React from 'react'
import { Layout, Main, Container as ThemeUiContainer, Styled, jsx } from 'theme-ui'
import './style.css'
import SEO from '../../components/SEO'
import { RainbowButton } from '../../components/RainbowButton'
import profilePicture from './assets/profilePicture.svg'
import { Flex } from '../../layouts/Flex'
import { Gallery } from '../../components/Gallery'

export default Home

function Home() {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Main>
          <div
            sx={{
              position: 'relative',
              zIndex: 0,
              backgroundColor: 'lessWhite'
            }}>
            <Container>
              <Flex
                sx={{
                  paddingTop: [5, 6],
                  paddingBottom: [4, 5],
                  justifyContent: 'center',
                  flexWrap: ['wrap-reverse', 'initial']
                }}>
                <div
                  sx={{
                    alignSelf: 'flex-end',
                    marginTop: 3,
                    marginBottom: [0, 5],
                    textAlign: ['center', 'initial']
                  }}>
                  <Styled.h2 sx={{ margin: 0 }}>Baitong</Styled.h2>
                  <Styled.p
                    sx={{
                      fontSize: 1,
                      lineHeight: 'heading'
                    }}>
                    I am an UX/UI designer
                  </Styled.p>
                  <RainbowButton sx={{ marginTop: [3, 4] }}>Resume</RainbowButton>
                </div>
                <img
                  alt="Baitong cartoon"
                  sx={{ marginLeft: ['initial', 'auto'], maxWidth: '100%' }}
                  src={profilePicture}
                />
              </Flex>
            </Container>
          </div>
          <Container sx={{ marginTop: [4, 5] }}>
            <Gallery />
          </Container>
        </Main>
      </Layout>
    </>
  )
}

function Container({ children, className }) {
  return (
    <div
      sx={{
        marginLeft: [30, 60],
        marginRight: [30, 60]
      }}
      className={className}>
      <ThemeUiContainer>{children}</ThemeUiContainer>
    </div>
  )
}
