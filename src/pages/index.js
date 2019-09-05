import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import GravityFormForm from "gatsby-gravityforms-component"

import { AllGravityData } from "../GfQuery"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const formData = AllGravityData()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Im just testing Gravity Forms</p>
      <GravityFormForm
        id={1}
        formData={formData}
        lambda={process.env.GATSBY_LAMBDA_ENDPOINT}
      />
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
