import React from "react"
import styled from "styled-components";

const Clients = styled.div`
	cursor: pointer;
	display: flex;
	flex-wrap: wrap;
	align-items: space-between;
	width: 80%;
	max-width: 1600px;
	margin: 0 auto 3rem;
	${props => props.theme.breakpoints('sm')`
		margin: 0 auto 7rem;
	`}

	&:hover {
		div {
			transform: scale(1.2);
		}
	}
`;

const Client = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 2rem 0;
	width: 50%;
	transition: transform 200ms ease-in-out;
	${props => props.theme.breakpoints('md')`
		width: 20%;
		height: 6rem;
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

export default ({ onClick }) => (
	<Clients onClick={onClick}>
		<Client>
			<ClientLogo src="/images/clients/client-brobizz.png" alt="BroBizz Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-aarstiderne.png" alt="Aarstiderne Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-dr.png" alt="Danmarks Radio Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-molo.png" alt="Molo Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-rigshospitalet.png" alt="Rigshospitalet Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-aller.png" alt="Aller Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-ida.png" alt="IDA Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-bif.png" alt="Brøndby IF Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-lomax.png" alt="Lomax Logo" />
		</Client>
		<Client>
			<ClientLogo src="/images/clients/client-cvation.png" alt="cVation Logo" />
		</Client>
	</Clients>
)