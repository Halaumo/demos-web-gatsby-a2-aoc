import React from 'react'
import styled from 'styled-components'
import logoImg from '@/images/header/logo.png'

const LogoImg = styled.img`
  max-width: 94px;
`

const Logo = () => (

    <LogoImg src={logoImg} alt='logo' />

)

export default Logo
