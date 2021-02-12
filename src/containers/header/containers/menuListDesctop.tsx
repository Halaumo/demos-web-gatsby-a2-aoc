import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/logo'
import { DarkDot } from '../components/dot'
import { Link } from '../components/link'

const WrapperDesctop = styled.ul`
  display: flex;
  align-items: center;

  & > li {
    padding-left: 37.5px;
    padding-right: 37.5px;
  }

  /** it's for a Logo component */
  & > div {
    margin-left: 30px;
    margin-right: 30px;
  }
`

const MenuListDesctop = () => {
  return (
    <WrapperDesctop>
      <li>
        <Link>about us</Link>
      </li>
      <li>
        <DarkDot />
      </li>
      <li>
        <Link>work</Link>
      </li>
      <div>
        <Logo />
      </div>
      <li>
        <Link>shop</Link>
      </li>
      <li>
        <DarkDot />
      </li>
      <li>
        <Link>contact</Link>
      </li>
    </WrapperDesctop>
  )
}

export default MenuListDesctop
