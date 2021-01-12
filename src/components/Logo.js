import React from "react"
import styled from "styled-components"
import { Image } from 'rebass'
import { Link } from "gatsby"

import LogoWhite from "../images/logoWhite.png"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
        <Image src={LogoWhite} alt="logo" />
    </LogoWrap>
  )
}

export default Logo