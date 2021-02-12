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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 100px;

  & > li {
    padding: 20px;
    color: #fff;
  }
`

const LinkWithDot = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${WhiteDot} {
    margin-top: 20px;
  }
`

const MenuListMobileHorizontal: FC<props> = ({ isActive }) => {
  return (
    <>
      <ScrollLock isActive={isActive} />
      <Modal isActive={isActive}>
        <Links>
          <LinkWithDot>
            <Link>about us</Link>
            <WhiteDot />
          </LinkWithDot>

          <LinkWithDot>
            <Link>work</Link>
            <WhiteDot />

          </LinkWithDot>

          <LinkWithDot>
            <Link>shop</Link>
            <WhiteDot />

          </LinkWithDot>

          <LinkWithDot>
            <Link>contact</Link>
            <WhiteDot />

          </LinkWithDot>
        </Links>
      </Modal>
    </>
  )
}

export default MenuListMobileHorizontal
