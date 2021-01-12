import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Image } from 'rebass'
import ParallaxItem from '../components/parallax-item'

import Layer0 from '../images/layer0.png'
import Layer1 from '../images/layer1.png'
import Layer2 from '../images/layer2.png'
import Layer3 from '../images/layer3.png'
import Layer4 from '../images/layer4.png'
import Layer5 from '../images/layer5.png'
import Layer6 from '../images/layer6.png'

const CoverLayers = [Layer0, Layer1, Layer2, Layer3, Layer4, Layer5, Layer6]

const AboutHero = styled.div`
    min-height: 500px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    ${'' /* background-image: url(${CoverImg}); */}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width: 480px) {
      text-align: center;
    }
`

const AboutIntro = styled.div`
    color: #fff;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      padding: 70px;
    }
`

const AboutIntroText = styled.div`
    max-width: 750px;
    margin-right: 70px;
    width: 90%;
`
const AboutMain = styled.div`
    top: 100vh;
    left: 0;
    right: 0;
    min-height: 100vh;
    width: 100vw;
    padding: 90px 70px 70px;
    background: ${({ theme }) => theme.body};
`
const AboutWrap = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    font-weight: 100;
    color: #212229;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      flex: 1 1;
    }
`
const AboutBio = styled.div`
    width: 75%;
    margin-right: 90px;
    color: ${({ theme }) => theme.text};

    @media screen and (max-width: 480px) {
      width: 100%;
    }
`
const ParallaxCover = styled(ParallaxItem)`
  display: block;
  position: absolute;
  top: 0;
`

export default function About() {

  return (
    <Layout>
      <AboutHero>
        {/* <AboutIntro>
          <AboutIntroText>
            <h1>
              <span>Hi, I'm Manjul.</span>
              <br />
              I am a Student, Developer, aspiring User Experience Specialist and a Dreamer.
            </h1>
            <iframe src="https://open.spotify.com/embed/track/0dm3KyleAwe6L4oEEyPm5m" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </AboutIntroText>
        </AboutIntro> */}
        {CoverLayers.map((layer, i) => (
          <ParallaxCover key={i} range={0.05*i}>
            <Image src={layer} />
          </ParallaxCover>
        ))}
        {/* <Image src={CoverLayers[0]} /> */}
      </AboutHero>
      <ParallaxItem range={0.05*7}>
      <AboutMain>
        <AboutWrap>
          <AboutBio>
            <h1>About Me</h1>
            <p>I am a Master's student of Human Computer Interaction at Rochester Institute of Technology.</p>
            <br />
            <p>I am passionate about designing interactive interfaces which are universally accessible and empower our lives. I want to create and provide user experiences which transcend the boundary between reality and the digital world. I am an ardent proponent of Weiser's Ubiquitous Computing and want to pave a path towards realising that vision. I believe in collaborative work and want to work with diverse teams where different perspectives merge together to create one beautiful product . Topics like Digital Well-being, Accessible Technologies and Inclusive Design are the most interesting to me.</p>
            <br />
            <p>I did my Bachelor's degree in Computer Science from Shiv Nadar University and later worked primarily as a front-end web-developer at Guru.com for 1 year.</p>
            <br />
            <p>I like to explore and go on adventures in high places. You will usually find me swinging my head to some sweet Spotify tunes.</p>
          </AboutBio>
        </AboutWrap>
      </AboutMain>
      </ParallaxItem>
    </Layout>
  )
}
