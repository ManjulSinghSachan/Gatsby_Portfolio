import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme/global-style'
import {
  lightTheme,
  darkTheme,
} from '../theme/theme'
import { DarkModeToggler } from 'react-darkmode-toggler'

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState('dark')
  const darkModeHandler = () => {
    setIsDark(
      isDark === 'light' ? 'dark' : 'light',
    )
  }

  return (
    <ThemeProvider
      theme={
        isDark === 'dark' ? darkTheme : lightTheme
      }
    >
      <GlobalStyle
        theme={
          isDark === 'dark'
            ? darkTheme
            : lightTheme
        }
      />
      <div
        style={{
          position: 'fixed',
          right: 0,
          zIndex: 10,
        }}
      >
        <DarkModeToggler
          isDark={isDark}
          onClick={darkModeHandler}
          size="middle"
        />
      </div>
      {children}
    </ThemeProvider>
  )
}
