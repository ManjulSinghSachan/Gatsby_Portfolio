import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faBehance,
} from '@fortawesome/free-brands-svg-icons'

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
  font-size: 40px;

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
      <p>See me around!</p>
      {/* </FooterContent> */}

      <FooterButtons>
        <a
          href="https://www.linkedin.com/in/manjulux/"
          target="_blank"
          style={{ backgroundImage: 'none' }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ManjulSinghSachan"
          target="_blank"
          style={{ backgroundImage: 'none' }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.behance.net/sachanmanj3bf4"
          target="_blank"
          style={{ backgroundImage: 'none' }}
        >
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </FooterButtons>
    </FooterContainer>
  )
}
