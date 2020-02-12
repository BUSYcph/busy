import React from "react"
import styled from "styled-components";

const Clients = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: space-between;
	width: 80%;
	max-width: 1600px;
	margin: 0 auto 3rem;
	${props => props.theme.breakpoints('sm')`
		margin: 0 auto 7rem;
	`}
`;

const Client = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 2rem 0;
	width: 50%;
	${props => props.theme.breakpoints('md')`
		width: 25%;
		height: 5rem;
  	`}
`;

const ClientLogo = styled.svg`
	max-width: 30vw;
	height: 10vw;
	max-height: 5vh;
	opacity: .5;
	${props => props.theme.breakpoints('md')`
		max-width: 10vw;
		max-height: 5vh;
	`}
`;

const ClientLogoImg = styled.img`
	max-width: 30vw;
	height: auto;
	opacity: .5;
	${props => props.theme.breakpoints('md')`
		max-width: 10vw;
	`}
`;

export default () => (
	<Clients>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-aarstiderne.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-molo.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-rigshospitalet.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-aller.png" />
		</Client>
		<Client>
			<ClientLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 52"><g fill="#212121" fillRule="nonzero"><path d="M91.35 40.58L76.6 12.03 61.87 40.58h3.11l11.63-22.67 11.63 22.67zM21.35 12.9H32.8v27.68H21.35zM42.9 18.62h1.51c5.33 0 8.9 3.54 8.9 8.13 0 4.59-3.57 8.15-8.85 8.15H42.9v5.69H45c8.5 0 14.42-6.19 14.42-13.83s-6-13.83-14.51-13.83h-2l-.01 5.69z"/></g></ClientLogo>
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-bif.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-lomax.png" />
		</Client>
		<Client>
			<ClientLogoImg src="/images/client-logos/client-cvation.png" />
		</Client>
	</Clients>
)