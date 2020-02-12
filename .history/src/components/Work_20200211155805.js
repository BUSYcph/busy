import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components";
import Image from "../components/Image";
import Video from "../components/Video";

const Work = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

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
		grid-template-columns: 1fr 2fr 1fr;
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
						  fields {
							slug
						  }
						}
					  }
				}
			}
		`
	);

	const {
		edges: workCases
	} = data.allMarkdownRemark;

	return (
		<Work>
			<Title>Select Client Work</Title>

			<Cases>
				{workCases.map(workCase => {
					const {
						cover
					} = workCase.node.frontmatter;

					const {
						slug
					} = workCase.node.fields;

					const isVideoCover = cover && cover.indexOf('.mp4') !== -1
					const CoverComponent = isVideoCover ? Video : Image;
					const componentAttributes = isVideoCover ? { autoPlay: true, playsInline: true, muted: true, loop: true } : {};

					return (
						<Case key={slug}>
							<Link to={slug}>
								<CoverComponent
									{...componentAttributes}
									src={cover}
								/>
							</Link>
						</Case>
					);
				})}
			</Cases>
		</Work>
	)
}