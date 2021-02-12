import React from 'react'
import styled from 'styled-components'
import image from '@/images/generation/01.png'
import Container from '../../hocs/container'

const Wrap = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  font-family: Lato;
  background-color: #f7f7f7;
`

const ThisContainer = styled(Container)`
  padding-right: 10px;
  padding-left: 10px;
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3.6px;
  margin-top: 30px;
  line-height: 2em;
`
const Text = styled.p`
  color: #848789;
  font-size: 18px;
  line-height: 2em;
  margin-top: 1em;
`

const ImgWrap = styled.div`
  & > img {
    max-width: 52px;
  }
`

const Template = () => {
  return (
    <Wrap>
      <ThisContainer>
        <ImgWrap>
          <img src={image} alt='icon image' />
        </ImgWrap>

        <Title>A NEW GENERATION OF VINTAGE BIKE</Title>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry`s standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </Text>
      </ThisContainer>
    </Wrap>
  )
}

export default Template
