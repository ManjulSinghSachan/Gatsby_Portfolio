import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faBehanceSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import { OutboundLink } from "gatsby-plugin-google-analytics"

const FooterContainer = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  align-items: center;
  justify-content: center;
  position: relative;
`

const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;

  & > a {
    padding: 0 80px;
    color: ${({ theme }) => theme.button};

    @media (max-width: 768px) {
      padding: 0 40px;
    }
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      {/* <FooterContent> */}
      <p>
        Thank you for checking out my work!
      </p>
      <p>Let's connect!</p>
      {/* </FooterContent> */}

      <FooterButtons>
        <OutboundLink
          href="mailto:sachanmanjul@gmail.com?subject=Let's Connect"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundImage: 'none', textDecoration: 'none', textAlign: 'center' }}
        >
          <FontAwesomeIcon icon={faEnvelopeSquare} style={{fontSize: "40px"}}/>
          <h2 style={{fontSize: "20px"}}>Email</h2>
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/in/manjulux/"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundImage: 'none', textDecoration: 'none', textAlign: 'center' }}
        >
          <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "40px"}}/>
          <h2 style={{fontSize: "20px"}}>LinkedIn</h2>
        </OutboundLink>
        <OutboundLink
          href="https://github.com/ManjulSinghSachan"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundImage: 'none', textDecoration: 'none', textAlign: 'center' }}
        >
          <FontAwesomeIcon icon={faGithub} style={{fontSize: "40px"}}/>
          <h2 style={{fontSize: "20px"}}>Github</h2>
        </OutboundLink>
        <OutboundLink
          href="https://www.behance.net/sachanmanj3bf4"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundImage: 'none', textDecoration: 'none', textAlign: 'center' }}
        >
          <FontAwesomeIcon icon={faBehanceSquare} style={{fontSize: "40px"}}/>
          <h2 style={{fontSize: "20px"}}>Behance</h2>
        </OutboundLink>
      </FooterButtons>
    </FooterContainer>
  )
}
