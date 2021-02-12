import React, { FC } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #f7f7f7;
  padding-top: 80px;
  padding-bottom: 80px;
`

const SliderWrap: FC = ({ children }) => {
  return (
    <Wrap>{children}</Wrap>
  )
}

export default SliderWrap
