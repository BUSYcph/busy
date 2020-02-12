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
	max-height: 200px;
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
			<ClientLogoImg src="/images/client-logos/client-ida.png" />
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