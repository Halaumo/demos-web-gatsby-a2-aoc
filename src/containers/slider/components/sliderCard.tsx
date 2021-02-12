import React, { FC } from 'react'
import styled from 'styled-components'

interface props {
  icon: string
  mainTitle: string
  secondTitle: string
  text: string
}

const Wrap = styled.div`
  text-align: center;
  font-family: Lato;
  cursor: pointer;
`

const IconWrap = styled.div``

const Title = styled.h2`
  margin-top: 20px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5em;

  & > span {
    font-weight: 300;
    color: #848789;
  }
`

const Text = styled.p`
  margin-top: 20px;

  line-height: 1.5em;
  color: #848789;
  font-size: 24px;
  font-style: italic;
`

const SliderCard: FC<props> = ({ icon, mainTitle, secondTitle, text }) => {
  return (
    <Wrap>
      <IconWrap>
        <img src={icon} alt="icon"/>
      </IconWrap>

      <Title>
        {mainTitle}<span>{secondTitle}</span>
      </Title>

      <Text>{text}</Text>
    </Wrap>
  )
}

export default SliderCard
