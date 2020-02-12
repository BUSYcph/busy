import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
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

const Logo = styled.svg`
	display: none;
	  width: 100px;
	  ${props => props.theme.breakpoints('sm')`
	 	display: block; 
	  `}
`;

export default ({ data }) => (
	<Layout left>
		<Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 400"><g fill="none" fillRule="evenodd"><path d="M58.505 71.5c6.26 0 15.432 3.903 12.706 8.048-12.412 18.875-25.159 61.905-38.242 129.089 19.903-37.913 37.74-57.944 53.51-60.094 23.656-3.224 33.671 15.921 27.382 51.42-17.975 101.457-91.275 107.839-77.024 94.164 14.252-13.674 43.95-85.49 33.312-98.993-3.768-4.782-49.428 78.608-39.528 113.192 2.415 8.437-20.355 3.884-21.53 2.53C-20.032 277.293 27.433 71.5 58.505 71.5zM161.656 116.605c-16.839-1.69-27.114 35.37-31.7 70.558-4.11 31.54-4.065 62.857 6.148 69.69 14.404 9.639 36.895-18.453 67.472-84.273 1.828 35.56 11.817 53.34 29.967 53.34 6.582 0-4.54-26.823 1.688-60.712 10.801-58.759 20.66-75.396-1.688-80.424-11.053-2.487-22.593 11.293-29.967 44.209-8.243 36.79-27.168 74.812-36.493 81.123-18.094 12.246 26.448-90.31-5.427-93.51zM275.108 75.082c-17.622 42.016 18.698 84.59 15.31 100.646-3.389 16.056-20.15-7.07-24.892 10.507-4.741 17.577 43.613 23.04 53.918-10.507 6.05-19.695-5.47-36.805-10.305-57.362-4.346-18.469-4.46-36.558 1.691-43.284 12.893-14.1 17.515 12.87 29.233-9.82 3.878-7.508-13.738-21.295-37.16-10.71-10.393 4.697-21.662 5.905-27.795 20.53zM387.85 25.769c-22.933-3.993-31.173 34.342-35.545 72.73-3.41 29.925-5.546 60.473 7.329 65.373 22.204 8.449 43.804-18.243 64.8-80.076.94 35.522-4.922 71.926-17.587 109.212s-26.098 50.441-40.3 39.465c10.155 26.85 28.677 22.13 55.567-14.163C462.45 163.872 470.23 11.908 452.616 2.16c-14.285-7.907-23.45 4.796-37.573 56.384-3.55 12.965-6.386 23.585-13.819 39.954-19.633 43.237-14.238 18.578-8.284-12.796 4.94-26.029 13.81-56.642-5.09-59.933zM0 396.91c28.76-9.64 49.919-16.428 63.474-20.365 62.69-18.206 106.545-30.024 135.991-38.195 80.679-22.386 136.544-39.571 177.238-51.5 48.154-14.115 73.884-20.32 76.023-21.866 3.948-2.854 15.967.207 6.56 5.922-2.62 1.59-14.092 4.237-20.158 6.134-18.761 5.865-30.654 8.968-84.508 23.103-23.606 6.196-23.858 6.134-55.938 15.82-45.233 13.66-86.693 24.283-122.499 34.9C118.425 367.987 59.697 384.066 0 399.1v-2.19z" fill="#000"/></g></Logo>
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