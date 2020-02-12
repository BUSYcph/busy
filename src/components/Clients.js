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

const ClientLogo = styled.img`
	max-width: 30vw;
	max-height: 80px;
	opacity: .5;
	${props => props.theme.breakpoints('md')`
		max-width: 10vw;
	`}
`;

export default () => (
	<Clients>
		<Client>
			<ClientLogo src="/images/clients/client-aarstiderne.png" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-molo.png" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-rigshospitalet.png" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-aller.png" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-ida.png" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-bif.png" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-lomax.png" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-cvation.png" />
		</Client>
	</Clients>
)