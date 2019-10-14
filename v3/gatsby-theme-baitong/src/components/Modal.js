import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { CSSTransition } from 'react-transition-group'

const TRANSITION_TIMEOUT = 200

export function Modal({ open, closeModal, children }) {
  // SSR support
  if (typeof document === 'undefined') {
    return null
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={open}
      classNames="modal"
      timeout={TRANSITION_TIMEOUT}
      unmountOnExit
      onEntering={() => {
        document.body.style.overflow = 'hidden'
      }}
      onExited={() => {
        document.body.style.overflow = null
      }}>
      <InnerModal closeModal={closeModal} children={children} />
    </CSSTransition>,
    document.querySelector('#modal-root')
  )
}

function InnerModal({ closeModal, children }) {
  function handleOverlayClick() {
    closeModal()
  }

  function handleModalContentClick(e) {
    preventModalClose(e)
  }

  function preventModalClose(e) {
    e.stopPropagation()
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContentLayout>
        <ModalContent onClick={handleModalContentClick}>{children}</ModalContent>
      </ModalContentLayout>
    </Overlay>
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
  transition: opacity ${TRANSITION_TIMEOUT}ms;

  &::before {
    content: '';
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  /* transition */
  &.modal-enter {
    opacity: 0;
  }

  &.modal-enter-active {
    opacity: 1;
  }

  &.modal-exit {
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
  }
`

const ModalContentLayout = styled.div`
  display: inline-flex;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;

  ${css({
    padding: 3
  })}
`

const ModalContent = styled.div`
  max-width: 1200px;
  min-height: 400px;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* Add this so that border-radius will still be showing */
  overflow: hidden;
`
