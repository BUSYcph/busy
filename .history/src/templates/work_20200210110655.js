import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout";

export default ({ data }) => (
	<Layout>
		<h1>{data.markdownRemark.frontmatter.description}</h1>

		{data.markdownRemark.frontmatter.activities.split('').map(activity => (
			<p>{activity}</p>
		)}

		<div
		dangerouslySetInnerHTML={{
			__html: data.markdownRemark.html,
		}}
		/>
	</Layout>
)


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
		title
		description
		activities
      }
    }
  }
`