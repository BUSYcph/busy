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
			<Fact>Always asking "Why?"</Fact>
			<Description>
				We have a purpose driven mindset. We need to understand why something needs to exist in order to be able to deliver the best possible solution. And we can also help you understand your existing systems.<br />"Why?" eats "How?" and "What?" for breakfast.
			</Description>
		</Usp>
		<Usp>
			<Fact>Loving to fail. Learning to rule.</Fact>
			<Description>
				Ok... Admitted. <em>loving</em> might be stretching it. Let's file that phrasing in the &quot;mistakes&quot; column. But we will always seek to deliver fast and thereby welcome the risk that follows. We have a pragmatic approach to creation; Build the minimal viable product in order to gain insights and from thereon out improve by repeating the process.
			</Description>
		</Usp>
		<Usp>
			<Fact>Way of working is key!</Fact>
			<Description>
				When we've learned why we're here and embraced our mistakes, it's time we consolidate our knowledge in a way that makes us effective in our continouous operation. We love to document way-of-working in light digestible products that will help ease creator convenience.
			</Description>
		</Usp>
	</About>
)