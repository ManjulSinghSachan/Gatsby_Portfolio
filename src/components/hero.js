import React from 'react'
import HeroParticles from './hero-particles'
import styled from 'styled-components'
import {
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faFilePdf, faListAlt } from '@fortawesome/free-solid-svg-icons'

import Button from './CustomButton'

import Resume from '../images/resumeManjul.pdf'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (max-width: 480px) {
    height: 100vh;
  }
`

const HeroIntro = styled.div`
  display: flex;
  position: absolute;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media screen and (max-width: 480px) {
    height: calc(30vh - 250px);
    top: 10%;
  }
`

const HeroName = styled(motion.div)`
  position: relative;
  color: ${({ theme }) => theme.text};
  font-weight: 900;
  font-size: 60px;
  line-height: 1.5;
  margin-bottom: 5px;
  text-shadow: -6px 7px 1px
    ${({ theme }) => theme.shadowHighlight};
  @media screen and (max-width: 480px) {
    font-size: 25px;
    text-shadow: -3px 4px 1px
      ${({ theme }) => theme.shadowHighlight};
  }
`
const HeroHeadline = styled.div`
  position: relative;
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  font-size: 25px;
  margin-bottom: 5px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`

const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  z-index: 10;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`
const ButtonIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 0.5em;
`

export default function Hero() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.5],
  )

  const openPdf = () => {
    window.open(Resume)
    return false
  }

  const goToProjects = () => {
    navigate('#projectList')
  }

  return (
    <Container>
      <HeroIntro>
        <HeroName style={{ scale: scale }}>
          manjul singh sachan.
        </HeroName>
        <HeroHeadline>
          UX Engineer. Student. Developer.
        </HeroHeadline>
        <HeroButtons>
          <Link
            to="/about/"
            style={{ backgroundImage: 'none' }}
          >
            <Button><ButtonIcon icon={faUserAstronaut} />About</Button>
          </Link>
          <Button primary onClick={goToProjects}>
            <ButtonIcon icon={faListAlt} />
            Projects
          </Button>
          <Button onClick={openPdf}>
            <ButtonIcon icon={faFilePdf} />
            Resume
          </Button>
        </HeroButtons>
      </HeroIntro>
      <HeroParticles />
    </Container>
  )
}
