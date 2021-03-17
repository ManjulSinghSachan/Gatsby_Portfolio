import React from 'react'
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { Title, Paragraph } from "../components/markdown-styles";
import ProjectContent from "../components/ProjectContent"
import PrimaryTitle from "../components/PrimaryTitle"
import ContentPara from "../components/ContentPara"
import Button from '../components/CustomButton'


import RehypeReact from "rehype-react"

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: Title,
    p: Paragraph,
    "project-content": ProjectContent,
    "primary-title": PrimaryTitle,
    "content-para": ContentPara,
    "internal-link": Link,
    "button": Button,
  },
}).Compiler;

const BlogTitle = styled.div`
  display: block;
  margin: 60px;
  text-align: center;
  font-weight: 900;
  font-size: 60px;
  line-height: 1.5;
`
const BlogTagsContainer = styled.div`
  text-align: center;
  margin: 20px;
`
const BlogTags = styled.div`
  display: inline-block;
  margin: 5px;
  font-size: 20px;
  background: #9c38ff;
  padding: 7px 20px;
  border-radius: 50px;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
}
`
const BlogContent = styled.div`
  margin: 20px auto;
  max-width: 70vw;
`

export default function Project({data}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">

          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogTagsContainer>
            {frontmatter.tags.map((tag, i) => (
              <BlogTags key={i}>{tag}</BlogTags>
            ))}
          </BlogTagsContainer>
          <Img fixed={frontmatter.thumbnail.childImageSharp.fixed} style={{maxHeight: '80vh', width: '100vw'}} />
          <BlogContent>
            {renderAst(htmlAst)}
          </BlogContent>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      htmlAst
      frontmatter {
        path
        tags
        thumbnail {
          childImageSharp {
            fixed(width: 1200, quality: 100) {
                ...GatsbyImageSharpFixed
            }
          }
        }
        title
      }
    }
  }
`

// const Project = ({ pageContext: project }) => {
  // const nextProjectUrl = `/projects/${project.next.slug}`
  // const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  // return (
    // <Layout>
       /* <AnimatePresence
         initial={false}
         exitBeforeEnter
       >
         <motion.div
           exit={{ opacity: 0 }}
           transition={{ transition }}
         >
           <ProjectHeader project={project} />
           <ProjectContent />
         </motion.div>
       </AnimatePresence> */

      /* <motion.div
          positionTransition
          exit= {{
            y: ({ element }) => {
              const navbar = document.querySelector("header");
              const navbarDimensions = navbar.getBoundingClientRect();
              const distanceToTop =
                element.getBoundingClientRect().top - navbarDimensions.height;
              return distanceToTop * -1;
            },
            transition: {
              ease: [0.59, 0.01, 0.28, 1],
              delay: 250,
              duration: TRANSITION_LENGTH * 1000 - 250
            }
          }} 
        > */
       /* <Link to={nextProjectUrl}>
         <ProjectHeader
           project={project.next}
           truncated={true}
         />
       </Link> */
       /* </motion.div>  */
    // </Layout>
  // )
// }

// export default Project
