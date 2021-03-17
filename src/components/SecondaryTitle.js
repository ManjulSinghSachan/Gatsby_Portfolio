import styled from "styled-components";

// import CorradineHandwriting from '../fonts/CorradineHandwriting.otf'

const SecondaryTitle = styled.h2`
  ${'' /* @font-face {
    font-family: 'CorradineHandwriting';
    src: url(${CorradineHandwriting}) format('truetype');
  }

  font-family: CorradineHandwriting; */}
  font-weight: bold;
  font-size: 3em;
  margin-left: 1em;
  color: ${props => props.color != undefined ? props.color : '#bc77ff'};
`
export default SecondaryTitle;