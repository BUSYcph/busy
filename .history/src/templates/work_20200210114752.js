import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import styled from "styled-components";

const Work = styled.div`
	display: flex;
	width: 80%;
	margin: 0 auto;
`;

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
	font-weight: 300;
	font-size: 1.3rem;
	line-height: 2.5rem;
	margin: 0;

	p:first-of-type {
		margin-top: 0;
	}

	${props => props.theme.breakpoints('md')`
		width: 75%;
		max-width: 550px;
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
		<Logo subtle />
		<Work>
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
		</Work>
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