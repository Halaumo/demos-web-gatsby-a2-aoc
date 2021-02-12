import React, { FC } from 'react'
import styled from 'styled-components'
import { mediaQueryLg } from '../../../hocs/mediaQueries'

const HoverImg = styled.div`
  transition: all 0.33s ease-in-out;
  z-index: 2;
  opacity: 0;
  background-color: rgba(100, 194, 158, 0.5);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  cursor: pointer;

  &:hover ${HoverImg} {
    opacity: 1;
  }
`

const MainImg = styled.div`
  height: 100%;
  position: relative;

  & > img {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    object-position: center;
    height: 100%;
  }

  ${mediaQueryLg(`
    & > img {
      position: static;
    }
  `)}
`

interface props {
  image: string
  hoverImage: string
}

const Component: FC<props> = ({ image, hoverImage }) => {

  return (
    <>
      <Wrap>
        <MainImg>
          <img src={image} alt="alt"/>
        </MainImg>

        <HoverImg>
          <img src={hoverImage} alt='image' />
        </HoverImg>
      </Wrap>
    </>
  )
}

export default Component
