import React from "react"
import styled from "styled-components";

const About = styled.div`
	font-family: "europa", sans-serif;
	font-size: 1rem;
	margin: 4rem 0;
	width: 80%;
`;

const Usp = styled.div`
	margin-bottom: 4rem;
	${props => props.theme.breakpoints('md')`
		display: flex;
	`}
`;

const Fact = styled.h2`
	font-weight: 700;
	letter-spacing: -.47px;
	line-height: 2.5rem;
	${props => props.theme.breakpoints('md')`
		margin: 0 2.5rem 0 0;
		width: 25%;
	`}
`;

const Description = styled.p`
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
	<About>
		<Usp>
			<Fact>Always Asking "Why?"</Fact>
			<Description>
				We embrace a purpose-driven mindset. To deliver effectively, we need to understand why something exists, and we can help you make sense of your existing systems. "Why?" trumps "How?" and "What?" every time.
			</Description>
		</Usp>
		<Usp>
			<Fact>Love to Fail, Learn to Rule</Fact>
			<Description>
				While <em>love</em> might be a stretch, we're always eager to test our theories quickly and embrace the risks that follow. Our pragmatic approach to creation involves building a minimum viable product, launching it, identifying weaknesses, making improvements, and repeating the process.
			</Description>
		</Usp>
		<Usp>
			<Fact>Way of Working is Key!</Fact>
			<Description>
				Once we understand our purpose and learn from our mistakes, it's time to consolidate our knowledge for efficient and continuous operation. We enjoy documenting our way of working in easily digestible formats that streamline the creative process.
			</Description>
		</Usp>
	</About>
)
