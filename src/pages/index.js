import React, { useState } from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProjectList from '../components/project-list'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProjectList />
      <Footer />
    </Layout>
  )
}
