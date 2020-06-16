import React from "react"
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby"

const Legend = styled.h2`
	margin: 8rem auto;
    font-size: 2rem;
    text-align: center;
	width: 75%;
	letter-spacing: 0.30rem;
	${props => props.theme.breakpoints('xl')`
		font-size: 2vw;
		margin: 6vw auto 7vw;
	`}
`;

export default () => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						description
					}
				}
			}
		`
	);

	return (<Legend>
		{data.site.siteMetadata.description}
	</Legend>)
}