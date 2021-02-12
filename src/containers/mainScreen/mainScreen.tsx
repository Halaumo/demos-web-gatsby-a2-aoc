import React from 'react'
import styled from 'styled-components'
import bgImage from '@/images/mainScreen/bg_main.jpg'

const MainScreen = styled.div`
  height: 100vh;

  & > div {
    height: 100%;
  }
`
const BgImage = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Template = () => {
  return (
    <MainScreen>
      <BgImage />
    </MainScreen>
  )
}

export default Template
