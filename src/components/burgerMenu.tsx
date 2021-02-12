import React, { FC } from 'react'
import styled, { css } from 'styled-components'

const burgerLine = css`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: #000;
  height: 2px;
`

const Wrapper = styled.div`
  cursor: pointer;
  padding: 7px;
`
interface burgerProps {
  isActive: boolean
}
const Burger = styled.div<burgerProps>(
  ({ isActive }) => css`
    position: relative;
    width: 30px;
    height: 20px;

    & span {
      ${burgerLine}
      top: 9px;
      transition: all 0.33s ease 0s;
    }

    &:before,
    &:after {
      ${burgerLine}
      content: '';
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    ${isActive &&
    `
    &:before {
      transform: rotate(45deg);
      top: 9px;
    }

    &:after {
      transform: rotate(-45deg);
      top: 9px;
    }

    & > span {
      transform: scale(0);
    }
  `}
  `
)

interface props extends burgerProps {
  onClick: (event?: unknown) => unknown
}

const Template: FC<props> = ({ isActive, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Burger isActive={isActive}>
        <span></span>
      </Burger>
    </Wrapper>
  )
}

export default Template
