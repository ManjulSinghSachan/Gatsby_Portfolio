import React from 'react'
// import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

import { Link } from 'gatsby'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'

import NewLayout from '../components/new-layout'
import ProjectHeader from '../components/project-header'
import ProjectContent from '../components/project-content'

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

const Project = ({ pageContext: project }) => {
  const nextProjectUrl = `/projects/${project.next.slug}`
  // const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  return (
    <NewLayout>
      <AnimatePresence
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
      </AnimatePresence>

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
      <Link to={nextProjectUrl}>
        <ProjectHeader
          project={project.next}
          truncated={true}
        />
      </Link>
      {/* </motion.div> */}
    </NewLayout>
  )
}

export default Project
