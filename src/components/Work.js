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
	width: 85%;
	margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
	display: block;
	overflow: hidden;
`;

const Cases = styled.div`
	width: 90%;
	${props => props.theme.breakpoints('lg')`
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row-gap: .5vw;
		grid-column-gap: .5vw;
	`}
	${props => props.theme.breakpoints('xl')`
		margin: 0 auto 7rem;
		width: 80%;
		max-width: 2000px;
		grid-template-columns: 1fr 1fr 1fr;
	`}
`;

const Case = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	position: relative;
	overflow: hidden;
	height: 97%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #000;

	${props => props.theme.breakpoints('xl')`
		margin-bottom: 0;
	`}

	a {
		color: #000;
	}

	&:hover {
		& a > div {
			transform: translateY(0);
		}
	}
`;


const InfoOverlay = styled.div`
display: none;
background: green;
	${props => props.theme.breakpoints('lg')`
		pointer-events: none;
		font-family: "europa", sans-serif;	
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.9);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		color: inherit;
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		box-sizing: border-box;
		will-change: transform;
		transform: translateY(150%);
		transition: transform 0.3s cubic-bezier(0.83, 0, 0.17, 1);
	`}
`;

const InfoCoverHeading = styled.h1`
	font-weight: 700;
	letter-spacing: -.47px;
	line-height: 2.5rem;
	margin: 0 0 3rem 0;
	white-space: nowrap;
	color: inherit;
`;

const InfoCoverDescription = styled.p`
	font-weight: 300;
	margin: 0 0 2rem 0;
	font-size: 1rem;
	line-height: 1.25rem;
	${props => props.theme.breakpoints('lg')`
		font-size: 1.3rem;
		line-height: 2.5rem;
	`}
`;

const InfoCoverMore = styled.div`
	font-weight: 400;
	font-size: 1.3rem;
	line-height: 2.5rem;
	color: #000;
	z-index: 2;
	display: inline-block;
	
`;

export default React.forwardRef(({ heading }, ref) => {
	const data = useStaticQuery(
		graphql`
			query {
				allMarkdownRemark
				(sort: { fields: [frontmatter___sort_order], order: ASC })
				{
					edges {
						node {
					  		frontmatter {
								sort_order
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
		<Work ref={ref}>
			<Title>{heading}</Title>

			<Cases>
				{workCases.map(workCase => {
					const {
						title,
						description,
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
							<StyledLink to={slug}>
								<InfoOverlay>
									<InfoCoverHeading>{title}</InfoCoverHeading>
									<InfoCoverDescription>{description}</InfoCoverDescription>
									<InfoCoverMore>
										more &gt;
									</InfoCoverMore>
								</InfoOverlay>
								<CoverComponent
									{...componentAttributes}
									src={cover}
								/>
							</StyledLink>
						</Case>
					);
				})}
			</Cases>
		</Work>
	)
});