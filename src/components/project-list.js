import React from 'react'
import styled from 'styled-components'
import { Image } from 'rebass'
import { Link } from 'gatsby'

import Button from './CustomButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faDev,
  faInvision,
} from '@fortawesome/free-brands-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'

import RiderGif from '../images/riderGIF.gif'
import HeuEval from '../images/heuristicEvaluation.png'
import TigerSteps from '../images/tigerSteps.png'

const ProjectContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 120px 15px;

  @media only screen and (min-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
    display: grid;
    grid-column-gap: 24px;
    grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 60px;
    align-items: center;
  }
`
const ProjectContent = styled.div`
  visibility: inherit;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  color: ${({ theme }) => theme.text};

  & > p {
    font-weight: 300;
    font-size: 25px;
  }

  @media only screen and (min-width: 768px) {
    grid-column-start: ${(props) =>
      props.right ? '12' : '2'};
    grid-column-end: ${(props) =>
      props.right ? '21' : '12'};
  }
`
const ProjectButtons = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const ProjectImage = styled.div`
  visibility: inherit;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);

  @media only screen and (min-width: 768px) {
    grid-column-start: ${(props) =>
      props.left ? '1' : '12'};
    grid-column-end: ${(props) =>
      props.left ? '12' : '21'};
    grid-row-start: 1;
    margin: auto;
    position: relative;
  }
`
const ButtonIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 0.5em;
`

export default function ProjectList() {
  return (
    <div id="projectList">
      <ProjectContainer>
        <ProjectContent>
          <p>
            RIT Rider - Google Assistant Action
          </p>
          This action integrates TransLoc's
          open-source RapidAPI with Google's
          DialogFlow to enable RIT students to
          directly ask the Google Assistant about
          shuttle schedules.
          <ProjectButtons>
            <a
              href="https://www.youtube.com/watch?v=fCqkzKY3o2Y&feature=youtu.be"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundImage: 'none' }}
            >
              <Button>
                <ButtonIcon
                    icon={faYoutube}
                  />
                Demo
              </Button>
            </a>
            <a
              href="https://devpost.com/software/rit-rider-google-assistant"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundImage: 'none' }}
            >
              <Button>
                <ButtonIcon icon={faDev} />
                Devpost                
              </Button>
            </a>
            <Link
              to="/blog/rit-rider"
              style={{ backgroundImage: 'none' }}
            >
              <Button><ButtonIcon icon={faClipboardList} />Case Study</Button>
            </Link>
          </ProjectButtons>
        </ProjectContent>
        <ProjectImage>
          <Image
            src={RiderGif}
            alt="RIT Rider Google Assistant Figure"
            height="600px"
          />
        </ProjectImage>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectContent right>
          <p>Wegmans RX - Usability Testing</p>
          Heuristic evaluation and usability
          testing for the Wegmans Pharmacy portal.
          <ProjectButtons>
          <Button><ButtonIcon icon={faClipboardList} />Case Study</Button>
          </ProjectButtons>
        </ProjectContent>
        <ProjectImage left>
          <Image
            src={HeuEval}
            alt="Wegmans RX Usability Testing Figure"
          />
        </ProjectImage>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectContent>
          <p>TigerSteps - RIT Admissions App</p>
          App that streamlines the admission
          process for new students by providing
          step-by-step instructions to keep track
          of their progress and minimizing the
          chance of missing crucial steps.
          <ProjectButtons>
            <a
              href="https://projects.invisionapp.com/prototype/ck3alw70g00eekx015mtudj0h/play"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundImage: 'none' }}
            >
              <Button>
                <ButtonIcon
                    icon={faInvision}
                />
                Demo
              </Button>
            </a>
            <Button><ButtonIcon icon={faClipboardList} />Case Study</Button>
          </ProjectButtons>
        </ProjectContent>
        <ProjectImage>
          <Image
            src={TigerSteps}
            alt="Tiger Steps Admissions App Figure"
            height="600px"
          />
        </ProjectImage>
      </ProjectContainer>
    </div>
  )
}
