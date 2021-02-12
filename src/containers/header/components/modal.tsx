import styled from 'styled-components'

interface props {
  isActive: boolean
}

const Modal = styled.ul<props>(({ isActive }) => `
  background-color: #4d4959;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: -100vh;
  left: 0;
  transition: top 0.5s ease;

  ${isActive && `
    top: 0;
  `}
`)

export default Modal
