import styled from "styled-components";

const ContentPara = styled.p`
font-size: ${props => props.customFontSize};
margin: 0 3rem;
color: ${({ theme }) => theme.text};
`
export default ContentPara;