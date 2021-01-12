import React from 'react'

import { Link } from 'gatsby'
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'

import Layout from '../components/layout'
import ProjectHeader from '../components/project-header'
import ProjectContent from '../components/project-content'
import { faImage } from '@fortawesome/free-solid-svg-icons'

const TRANSITION_LENGTH = 1

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const headerContent = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: TRANSITION_LENGTH,
      delay: TRANSITION_LENGTH,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: TRANSITION_LENGTH,
    },
  },
}

const nextProject = {
  initial: {
    y: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: TRANSITION_LENGTH,
      delay: TRANSITION_LENGTH,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: TRANSITION_LENGTH,
    },
  },
}

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
}
`
const BlogContent = styled.div`
  margin: 20px auto;
  max-width: 70vw;
`

export default function Project({data}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
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
          <Img fluid={frontmatter.thumbnail.childImageSharp.fluid} style={{maxHeight: '80vh'}} />
          <BlogContent
            dangerouslySetInnerHTML={{ __html: html }}
          >
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
      frontmatter {
        path
        tags
        thumbnail {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
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
       {/* <AnimatePresence
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
       </AnimatePresence> */}

      {/* <motion.div
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
        > */}
       {/* <Link to={nextProjectUrl}>
         <ProjectHeader
           project={project.next}
           truncated={true}
         />
       </Link> */}
       {/* </motion.div>  */}
    // </Layout>
  // )
// }

// export default Project
