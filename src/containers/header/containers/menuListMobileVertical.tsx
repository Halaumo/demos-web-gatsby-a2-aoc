import ScrollLock from '../../../hocs/scrollLock'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from '../components/link'
import { WhiteDot } from '../components/dot'
import Modal from '../components/modal'
interface props {
  isActive: boolean
}

const Links = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  padding-top: 160px;

  & > li {
    padding: 20px;
    color: #fff;
  }
`

const MenuListMobileVertical: FC<props> = ({ isActive }) => {
  return (
    <>
      <ScrollLock isActive={isActive} />
      <Modal isActive={isActive}>
        <Links>
        <li>
          <Link>about us</Link>
        </li>
        <li>
          <WhiteDot />
        </li>
        <li>
          <Link>work</Link>
        </li>
        <li>
          <WhiteDot />
        </li>
        <li>
          <Link>shop</Link>
        </li>
        <li>
          <WhiteDot />
        </li>
        <li>
          <Link>contact</Link>
        </li>
        </Links>
      </Modal>
    </>
  )
}

export default MenuListMobileVertical
