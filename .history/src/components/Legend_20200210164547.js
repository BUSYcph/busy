import React from "react"
import styled from "styled-components";

const Legend = styled.h2`
	margin: 8rem auto;
    font-size: 2rem;
    text-align: center;
	width: 75%;
	letter-spacing: 0.30rem;
	${props => props.theme.breakpoints('xl')`
		font-size: 2vw;
		margin: 6vw auto 10vw;
	`}
`;

const Detailed = styled.span`
	position: relative;
`;

const Details = styled.span`
	display: none;
	position: absolute;
	transform: translate(-270px,-40px);
	font-family: p22-pooper-black-pro, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 1.5rem;
	width: 200px;
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