import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout";

export default () => (
	<Layout>
		123
	</Layout>
)


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
		title
		description
      }
    }
  }
`