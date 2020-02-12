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
	margin: 0;

	strong {
		font-weight: 600;
	}

	${props => props.theme.breakpoints('md')`
		width: 75%;
	`}
`;

export default () => (
	<Disciplines>
		<Inner>
			<Heading>Things that we do with pleasure</Heading>
			<Discipline><strong>Frontend Code</strong> React, JavaScript, Sketch, HTML, CSS... you name it.</Discipline>
			<Discipline><strong>UX / Wireframe / Graphical Design</strong> Design Sprints, Sketch, Photoshop, Illustrator, Procreate, Animation, etc.</Discipline>
			<Discipline><strong>Health Checks</strong> Performance Audits, Optimizations</Discipline>
			<Discipline><strong>Other Consulting Stuff</strong> Mentoring, Teaching, Peer Training</Discipline>
			<Discipline><strong>Entertainment</strong> Dumb dad jokes, the Macarena</Discipline>
		</Inner>
	</Disciplines>
)