import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Resume from '../images/resumeManjul.pdf'

const HeaderLinks = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  color: #fff;
  display: inline-block;
  font-size: 15px;
  margin: 0 30px;

  &:hover {
    color: #2f0c51;
  }

  &:active {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
    const openPdf = () => {
        window.open(Resume)
        return false
      }
  return (
    <>
        <HeaderLinks to="/about/">
            About
        </HeaderLinks>
        <HeaderLinks to="/#projectList">
            Projects
        </HeaderLinks>
        <HeaderLinks as="button" onClick={openPdf} style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>
            Resume
        </HeaderLinks>
    </>
  )
}

export default NavbarLinks