/* @jsx jsx */
import React from 'react'
import { Layout, Main, Container, Styled, jsx } from 'theme-ui'
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
                  marginTop: 130,
                  justifyContent: 'center',
                  flexWrap: ['wrap-reverse', 'initial']
                }}>
                <div
                  sx={{ marginTop: [4, 100], marginBottom: 5, textAlign: ['center', 'initial'] }}>
                  <SEO title="Home" />
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
          <Container>
            <Gallery />
          </Container>
        </Main>
      </Layout>
    </>
  )
}
