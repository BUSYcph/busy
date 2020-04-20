import React from "react"
import styled from "styled-components";

const Heading = styled.h2`
	font-weight: 700;
	letter-spacing: -.47px;
	line-height: 2.5rem;
	width: 85%;
	margin-bottom: 3rem;
`;

const Disciplines = styled.div`
	font-family: "europa", sans-serif;
	font-size: 1rem;
	margin: 4rem 0;
	width: 100%;
	background: #f2f2f2;
`;

const Inner = styled.div`
	margin: 4rem auto;
	width: 80%;
`;

const Discipline = styled.p`
	font-weight: 300;
	font-size: 1.3rem;
	line-height: 2.5rem;
	margin: 0 0 2rem 0;

	strong {
		font-weight: 600;
		margin-right: 0.5rem;
	}

	${props => props.theme.breakpoints('md')`
		margin: 0;
	`}
`;

const Emoji = styled.span`
	font-size: 2rem;
	margin-right: 1rem;
`;

export default () => (
	<Disciplines>
		<Inner>
			<Heading>Things we do with pleasure</Heading>
			<Discipline><Emoji>🦾</Emoji><strong>Frontend Code</strong> React, JavaScript, HTML, CSS, implementing UI for CMS systems of any kind... you name it.</Discipline>
			<Discipline><Emoji>💅</Emoji><strong>UX / Wireframe / Graphical Design</strong> Design Sprints, Figma (and Sketch, Invision Studio etc.), Photoshop, Illustrator, Procreate, Animation, etc.</Discipline>
			<Discipline><Emoji>👩‍⚕️</Emoji><strong>Health Checks</strong> Performance Audits, Code Refactoring, Optimisations.</Discipline>
			<Discipline><Emoji>💼</Emoji><strong>Other Consulting Stuff</strong> Mentoring, Teaching, Peer Training.</Discipline>
			<Discipline><Emoji>🤹‍♂️</Emoji><strong>Entertainment</strong> Dumb dad jokes, the Macarena.</Discipline>
		</Inner>
	</Disciplines>
)