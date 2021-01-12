import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.button};
  margin: 2em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-size: 20px;
  min-width: 180px;

  @media screen and (max-width: 480px) {
    margin: 1em 0em;
    font-size: 10px;
    min-width: 60px;
  }

  :hover {
    background: ${({ theme }) => theme.button};
    color: #fff;
  }

  ${(props) =>
    props.primary &&
    css`
      font-weight: 600;
      background: ${({ theme }) => theme.button};
      color: #fff;
      min-width: 200px;
    `};
`

export default Button
