import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProjectList from '../components/project-list'

export default function Home(props) {
  return (
    <Layout location={props.location}>
      <Hero />
      <ProjectList />
    </Layout>
  )
}
