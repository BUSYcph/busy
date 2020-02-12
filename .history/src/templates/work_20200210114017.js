import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout";



const Title = styled.h1`
	font-weight: 700;
	letter-spacing: -.47px;
	line-height: 2.5rem;
	${props => props.theme.breakpoints('md')`
		margin: 0 2.5rem 0 0;
		width: 25%;
	`}
`;

const Description = styled.h2`
	font-weight: 700;
	letter-spacing: -.47px;
	line-height: 2.5rem;
	${props => props.theme.breakpoints('md')`
		margin: 0 2.5rem 0 0;
		width: 25%;
	`}
`;

const Activities = styled.ul`
	list-style: none;
	font-weight: 700;
	letter-spacing: -.47px;
	line-height: 2.5rem;
	${props => props.theme.breakpoints('md')`
		margin: 0 2.5rem 0 0;
		width: 25%;
	`}
`;

export default ({ data }) => (
	<Layout>
		<Title>{data.markdownRemark.frontmatter.title}</Title>

		<Description
			dangerouslySetInnerHTML={{
				__html: data.markdownRemark.html,
			}}
		/>

		<Activities>
			{data.markdownRemark.frontmatter.activities.map(activity => {
				return <li key={activity}>{activity}</li>
			}
			)}
		</Activities>
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