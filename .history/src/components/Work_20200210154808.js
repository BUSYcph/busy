import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components";

const Title = styled.h2`
	font-weight: 700;
	letter-spacing: -.47px;
	line-height: 2.5rem;
`;

const Cases = styled.div`
	width: 90%;
	${props => props.theme.breakpoints('sm')`
		margin: 0 auto 7rem;
		width: 80%;
		max-width: 1600px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row-gap: .5vw;
		grid-column-gap: .5vw;
	`}
`;

const Case = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	${props => props.theme.breakpoints('sm')`
		margin-bottom: 0;
	`}
`;

const Video = styled.video`
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
`;

export default () => {
	const data = useStaticQuery(
		graphql`
			query {
			allMarkdownRemark {
				edges {
					node {
					frontmatter {
						title
						description
						cover
					}
					}
				}
				}
			}
		`
	);

	const {
		edges : workCases
	} = data.allMarkdownRemark;


	console.log(workCases);

	return (
		<>
			<Title>Select Client Work</Title>

			<Cases>
				{workCases.map(workCase => {
					const {
						cover
					} = workCase.node.frontmatter;

					const isVideoCover = cover && cover.indexOf('.mp4') !== -1
					const CoverComponent = isVideoCover ? Video : Image;
					const componentAttributes = isVideoCover ? { autoPlay : true, playsInline : true, muted : true, loop : true } : {};

					return (
						<Case>
							<CoverComponent 
								{...componentAttributes}
								src={cover}
							/>
						</Case>
					);
				})}
			</Cases>
		</>
	)
}