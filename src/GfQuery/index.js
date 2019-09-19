import { useStaticQuery, graphql } from "gatsby"

export const AllGravityData = () => {
  const { allGfForm } = useStaticQuery(
    graphql`
      query allGfQuery {
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
                labelPlacement
                description
                descriptionPlacement
                type
                choices
                content
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
