import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const TRANSITION_TIMEOUT = 200

export function Modal({ open, closeModal, children }) {
  // SSR support
  if (typeof document === 'undefined') {
    return null
  }

  useCloseModalOnEscapeKey(closeModal)

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
        document.body.style.overflow = ''
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
    <Overlay
      onClick={handleOverlayClick}
      style={{
        textAlign: 'center'
      }}>
      <ModalContentLayout>
        <CloseIcon style={{ float: 'right' }} />
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

const CloseIcon = styled(FontAwesomeIcon)`
  z-index: 1;
  position: sticky;
  color: white;
  cursor: pointer;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));

  ${css({
    top: 2,
    marginBottom: 2
  })}

  @media screen and (min-width: 1230px) {
    ${css({
      marginBottom: 3,
      transform: theme => `translateX(calc(100% + ${theme.space[3]}px))`
    })}
  }
`

CloseIcon.defaultProps = {
  icon: faTimes,
  size: '2x'
}

const ModalContentLayout = styled.div`
  vertical-align: middle;
  width: 100%;
  max-width: 1200px;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  ${css({
    padding: 3
  })}
`

const ModalContent = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* Add this so that border-radius will still be showing */
  overflow: hidden;
`

function useCloseModalOnEscapeKey(closeModal) {
  useEffect(() => {
    function closeOnEscape(e) {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
    }
  })
}
