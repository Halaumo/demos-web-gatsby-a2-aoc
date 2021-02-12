import React, { FC } from 'react'
import styled from 'styled-components'

interface props {
  icon: string
  title: string
  text: string
  image: string
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Header = styled.header`
  padding-left: 55px;
  padding-right: 55px;
  padding-top: 70px;
  padding-bottom: 55px;
  text-align: center;
  font-family: Lato;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    z-index: 2;
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #fff;
    transform: translateX(-50%);
  }
`

const WrapIcon = styled.div`
  margin-bottom: 30px;
`

const WrapImg = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    max-height: 100%;
  }
`

const Title = styled.h2`
  margin-bottom: 0.5em;
  font-size: 18px;
  line-height: 1.5em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3.6px;
`

const Content = styled.div`
  &:after {
    content: '';
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 80px;
    height: 2px;
    background-color: #ebebeb;
  }
`

const Text = styled.p`
  font-size: 18px;
  line-height: 2em;
`

const Component: FC<props> = ({ icon, title, text, image }) => {
  return (
    <Wrap>
      <Header>
        <Content>
          <WrapIcon>
            <img src={icon} alt='icon' />
          </WrapIcon>

          <Title>{title}</Title>

          <Text>{text}</Text>
        </Content>
      </Header>

      <WrapImg>
        <img src={image} alt='image' />
      </WrapImg>
    </Wrap>
  )
}

export default Component
