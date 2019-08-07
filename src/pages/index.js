import React from "react"
import { Link } from "gatsby"
import GravityFormForm from "gatsby-gravityforms-component"

import allGravityData from "../GfQuery"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Im just testing Gravity Forms</p>
      <GravityFormForm
        id={1}
        formData={allGravityData()}
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
