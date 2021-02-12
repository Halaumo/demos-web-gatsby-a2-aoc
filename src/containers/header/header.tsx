import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import zIndex from '../../config/zIndex'
import { mediaQueryLg, matchMediaQueryLg, matchOrientation } from '../../hocs/mediaQueries'
import useMediaQuery from '@/hocs/useMediaQuery'
import BurgerMenu from '../../components/burgerMenu'
import Logo from '../../components/logo'
import MenuListDesctop from './containers/menuListDesctop'
import MenuListMobileVertical from './containers/menuListMobileVertical'
import MenuListMobileHorizontal from './containers/menuListMobileHorizontal'

const Header = styled.header`
  position: absolute;
  z-index: ${zIndex.absolute};
  left: 0;
  top: 35px;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 85px;

  ${mediaQueryLg(`
    display: block;
    position: relative;
  `)}
`

const BurgerPosition = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: ${zIndex.modalBtn};
`

const LogoPosition = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndex.modalBtn};
`

const Template = () => {
  const isMobile = useMediaQuery(matchMediaQueryLg)
  const isLandscape = useMediaQuery(matchOrientation('landscape'))
  const [isBurger, setIsBurger] = useState(false)

  const burgerHandler = useCallback(() => {
    setIsBurger((prev) => !prev)
  }, [])

  return (
    <Header>
      <Row>
        {isMobile ? (
          <>
            <LogoPosition>
              <Logo />
            </LogoPosition>

            <BurgerPosition>
              <BurgerMenu isActive={isBurger} onClick={burgerHandler} />
            </BurgerPosition>

            {isLandscape ? (
              <MenuListMobileHorizontal isActive={isBurger} />
            ) : (
              <MenuListMobileVertical isActive={isBurger} />
            )}
          </>
        ) : (
          <>
            <MenuListDesctop />
          </>
        )}
      </Row>
    </Header>
  )
}

export default Template
