import React from 'react'
import styled from 'styled-components'
import { Form } from 'react-powerplug'

const Container = styled.div`
  input,
  textarea {
    box-sizing: border-box;
    font-size: 14px;
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    outline: none;
    border: none;
    border-radius: 0.25rem;
  }

  input:not(:first-child),
  textarea:not(:first-child) {
    margin-top: 0.5rem;
  }

  textarea {
    resize: none;
  }
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Background = styled.div`
  width: 500px;
  padding: 4rem 3rem 2rem;
  border-radius: 0.5rem;
  background: #999;
`

const Button = styled.button`
  margin-top: 2rem;
  background: #ccc;
  border: none;
  border-radius: 1rem;
  padding: 1rem 3rem;
`

export default () => (
  <Form initial={{ name: '', email: '', message: '' }}>
    {({ input, values }) => {
      const onSubmit = () => {
        window.open(`mailto:contact@baitong.me?`)
      }
      return (
        <Container className="pv3 pv4-ns">
          <Center>
            <h1>CONTACT ME</h1>
            <Background>
              <Center>
                <input placeholder="Name" {...input('name').bind} />
                <input placeholder="Email" {...input('email').bind} />
                <textarea placeholder="Message..." rows={5} {...input('message').bind} />
                <Button onClick={onSubmit}>SUBMIT</Button>
              </Center>
            </Background>
          </Center>
        </Container>
      )
    }}
  </Form>
)
