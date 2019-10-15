/* @jsx jsx */
import React from 'react'
import { Layout, Main, Styled, jsx } from 'theme-ui'
import './style.css'
import SEO from '../../components/SEO'
import { RainbowButton } from '../../components/RainbowButton'
import profilePicture from './assets/profilePicture.svg'
import { Flex } from '../../layouts/Flex'
import { Gallery } from '../../components/Gallery'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'

export default Home

function Home() {
  return (
    // @ts-ignore
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
                  justifyContent: ['center', 'flex-start'],
                  flexWrap: ['wrap-reverse', 'nowrap']
                }}>
                <div
                  sx={{
                    alignSelf: 'flex-end',
                    marginTop: 3,
                    marginBottom: [0, 5],
                    textAlign: ['center', 'left']
                  }}>
                  <Styled.h2 sx={{ margin: 0 }}>Baitong</Styled.h2>
                  <Styled.p
                    sx={{
                      fontSize: [0, 1],
                      marginTop: 1
                    }}>
                    I am an UX/UI designer
                  </Styled.p>
                  <RainbowButton sx={{ marginTop: [3, 4] }}>Resume</RainbowButton>
                </div>
                <img
                  alt="Baitong cartoon"
                  sx={{ marginLeft: [null, 'auto'], maxWidth: '100%' }}
                  src={profilePicture}
                />
              </Flex>
            </Container>
          </div>
          <Container sx={{ marginTop: [4, 5], marginBottom: [4, 112] }}>
            <Gallery />
          </Container>
        </Main>
        <Footer Container={Container} />
      </Layout>
    </>
  )
}
