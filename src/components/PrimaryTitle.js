import styled from "styled-components";

const PrimaryTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: ${props => props.big ? "9.5em" : "5em"};
  color: ${props => props.color != undefined ? props.color : '#9c38ff'};
  text-transform: uppercase;
`
export default PrimaryTitle;