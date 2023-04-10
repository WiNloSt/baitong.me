/* @jsx jsx */
import React from 'react'
import { Layout, Main, Styled, jsx } from 'theme-ui'
import './style.css'
import SEO from '../../components/SEO'
// import profilePicture from './assets/profilePicture.svg'
import heroImage from './assets/heroImage.svg'
import { Flex } from '../../layouts/Flex'
import { Gallery } from '../../components/Gallery'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import CTALinkButton from '../../components/CTALinkButton'

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
            }}>
            <Container>
              <Flex
                sx={{
                  paddingTop: [5, 6],
                  paddingBottom: [3, 0],
                  justifyContent: ['center', 'flex-start'],
                  flexWrap: ['wrap-reverse', 'nowrap'],
                }}>
                <div
                  sx={{
                    alignSelf: 'flex-end',
                    marginTop: 3,
                    marginBottom: [0, 5],
                    textAlign: ['center', 'left'],
                  }}>
                  <Styled.h2 sx={{ margin: 0, marginTop: 3 }}>NATTHAPAT (Annie)</Styled.h2>
                  <Styled.p
                    sx={{
                      marginTop: 3,
                    }}>
                    I am a UX Designer with 4 years of experience designing websites and
                    applications for a wide range of industries including deliveries, logistics,
                    finance, and IT.
                  </Styled.p>
                  <CTALinkButton sx={{ marginTop: [4, '24px'] }} href="/Natthapat_resume.pdf">
                    Resume
                  </CTALinkButton>
                </div>
                <img
                  alt="Baitong cartoon"
                  sx={{ marginLeft: [null, 'auto'], maxWidth: '100%' }}
                  src={heroImage}
                />
              </Flex>
            </Container>
          </div>
          <Container sx={{ marginTop: [4, 5], marginBottom: [4, 5] }}>
            <Gallery />
          </Container>
        </Main>
        <Footer Container={Container} />
      </Layout>
    </>
  )
}
