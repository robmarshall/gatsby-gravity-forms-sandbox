import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const allGravityData = () => {
  const { allGfForm } = useStaticQuery(
    graphql`
      query {
        allGfForm {
          edges {
            node {
              formId
              slug
              apiURL
              descriptionPlacement
              formFields {
                id
                label
                description
                descriptionPlacement
                type
                choices
                errorMessage
                inputMaskValue
                isRequired
                visibility
                cssClass
                placeholder
                size
                defaultValue
                maxLength
              }
              button {
                text
              }
              confirmations {
                message
              }
            }
          }
        }
      }
    `
  )
  return allGfForm
}

console.log(allGravityData)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Im just testing Gravity Forms</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
