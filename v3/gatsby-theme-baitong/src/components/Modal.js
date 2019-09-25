import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'

export function Modal({ open, closeModal }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = null
    }
  }, [open])

  if (!open) {
    return null
  }

  function handleOverlayClick() {
    closeModal()
  }

  function handleModalContentClick(e) {
    preventModalClose(e)
  }

  function preventModalClose(e) {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContentLayout>
        <ModalContent onClick={handleModalContentClick}>Modal content</ModalContent>
      </ModalContentLayout>
    </Overlay>,
    document.querySelector('#modal-root')
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow: auto;

  &::before {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
`

const ModalContentLayout = styled.div`
  display: inline-flex;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  ${css({
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 4,
    paddingRight: 4
  })}
`

const ModalContent = styled.div`
  max-width: 800px;
  min-height: 400px;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`
