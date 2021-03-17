import React from "react";
import styled from "styled-components";
import PrimaryTitle from "../components/PrimaryTitle";
import SecondaryTitle from "../components/SecondaryTitle";
import ContentPara from "../components/ContentPara";

const ContentHeadline = styled.h1`
font-size: 3em;
margin-top: 0.1rem;
`

const ContentSubheadline = styled.h2`
font-size: ${props => props.customFontSize};
display: ${props => props.visible ? "block" : "none"};
color: grey;
`


function ProjectContent(props) {
    return(
        // <section id={props.id} className={props.className} style={{maxHeight: "100vh", marginTop: "5em"}}>
        //     <div style={{display: "flex", flexDirection: "row", margin: "2em"}}>
        //         <ContentHeadline>{props.Title}</ContentHeadline>
        //         <ContentPara customFontSize={props.ContentSize != undefined ? props.ContentSize : "1.1em"}> <ContentSubheadline customFontSize={props.SubheadlineSize != undefined ? props.SubheadlineSize : "1.8em"} visible= {props.Subheadline != undefined}>{props.Subheadline}</ContentSubheadline>{props.Content}</ContentPara>
        //     </div>
        //     <div style={{textAlign: "center"}}>
        //         <img src={props.ImageURL}  style={{maxHeight: "inherit"}}/>
        //     </div>
        // </section>
         <section id={props.id} className='section' style={{marginTop: "5em"}}>
            <PrimaryTitle>{props.title}</PrimaryTitle>
            <div style={{display: "flex", flexDirection: "row", margin: "2em"}}>
                <div><img src={props.imageurl} style={{maxWidth: props.imagesize}}/></div>
                <div style={{display: "flex", flexDirection: "column", width: "70vw"}}>
                    {/* <ContentSubheadline customFontSize={props.SubheadlineSize != undefined ? props.SubheadlineSize : "1.8em"} visible= {props.Subheadline != undefined}>{props.Subheadline}</ContentSubheadline> */}
                    <SecondaryTitle>{props.subheadline}</SecondaryTitle>
                    <ContentPara customFontSize={props.contentsize != undefined ? props.contentsize : "1.1em"}> {props.content}</ContentPara>
                </div>
            </div>
            
        </section>
    )
}

export default ProjectContent;