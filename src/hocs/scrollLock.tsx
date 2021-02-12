import { createGlobalStyle } from 'styled-components'

interface props {
  isActive: boolean
}

const ScrollLock = createGlobalStyle<props>(
  ({ isActive }) => `
  ${
    isActive &&
    `
    body {
      overflow: hidden;
    }
  `
  }
`
)

export default ScrollLock
