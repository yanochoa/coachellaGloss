import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import '../../sass/index.scss'

const IndexPage = data => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `coachella`,
        `coachella gloss`,
        `coachellagloss`,
        `coachella lineup`,
      ]}
    />
  </Layout>
)

export default IndexPage
