import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme/global-style'
import {
  lightTheme,
  darkTheme,
} from '../theme/theme'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Footer from '../components/footer'
import styled from 'styled-components'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"

const Navigation = styled(motion.nav)`
  height: 10vh;
  min-height: 70px;
  display: flex;
  background-color: rgb(156,56,255,0.8);
  position: fixed;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 1000;
  align-self: center;
  width: 100vw;

  @media (max-width: 768px) {
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    background-color: rgb(156,56,255);
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: rgb(156,56,255);
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

export default function Layout({location, children }) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const [isDark, setIsDark] = useState(true)
  const darkModeHandler = (checked) => {
    setIsDark(checked)
  }

  const { scrollYProgress } = useViewportScroll();
  const navOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // const currentURL = location.href ? location.href : "";
  // console.log(currentURL);

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  };


  return (
    <ThemeProvider
      theme={
        isDark ? darkTheme : lightTheme
      }
    >
      <GlobalStyle
        theme={
          isDark ? darkTheme : lightTheme
        }
      />
      <Navigation style={{ opacity: navOpacity}}>
        <Logo />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks />
            <DarkModeSwitch
              checked={isDark}
              onChange={darkModeHandler}
              sunColor="white"
            />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
            <DarkModeSwitch
              checked={isDark}
              onChange={darkModeHandler}
              sunColor="white"
            />
          </Navbox>
        )}
      </Navigation>
      {children}
      <Footer />
    </ThemeProvider>
  )
}
