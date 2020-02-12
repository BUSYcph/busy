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
	width: 80%;
`;

const Discipline = styled.p`
	font-weight: 300;
	font-size: 1.3rem;
	line-height: 2.5rem;
	margin: 0;

	${props => props.theme.breakpoints('md')`
		width: 75%;
		max-width: 550px;
	`}
`;

export default () => (
	<Disciplines>
		<Heading>We do</Heading>
		<Discipline>Frontend Code React, JavaScript, Sketch, HTML, CSS</Discipline>
		<Discipline>UX / Wireframe / graphical design Sketch, Photoshop, Illustrator, Procreate, Animation</Discipline>
	</Disciplines>
)