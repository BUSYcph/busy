import React from "react"
import styled from "styled-components";
import GoogleMap from "../components/GoogleMap";
import MapMarker from "../components/MapMarker";

const Footer = styled.div`
	display: flex;
	flex-direction: column;
	${props => props.theme.breakpoints('xl')`
		flex-direction: row;
	`}
`;

const SoMeLinks = styled.ul`
	padding: 0;
	margin: 2rem 0 0 0;
	list-style: none;
	display: flex;
`;

const SoMeLogo = styled.svg`
	width: 20px;
    height: 20px;
    margin-right: 20px;
`;

const FooterSection = styled.div`
	display: flex;
	font-family: "europa", sans-serif;
	font-weight: 100;
	background: #000;
	color: #fff;
	font-size: 1rem;
	line-height: 1.4rem;

	justify-content: center;
	align-items: center;
	width: 100%;

	p {
		margin: 0
	}

	a {
		color: #fff;
		text-decoration: none;
	}
	${props => props.theme.breakpoints('xl')`
		font-size: 1.2rem;
		line-height: 2rem;
		width: 50%;
	`}
`

const FooterSectionAddress = styled(FooterSection)`
	justify-content: space-evenly;
`;

const Address = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem 0;
	letter-spacing: 0.2rem;
`

const Picture = styled.div`
	border-radius: 100%;
	img {
		width: 10rem;
		height: 10rem;
		display: block;
		border-radius: 100%;
		${props => props.theme.breakpoints('md')`
			width: 15rem;
			height: 15rem;
		`}
		${props => props.theme.breakpoints('xl')`
			width: 20rem;
			height: 20rem;
		`}
	}
`

export default () => (
	<Footer>
		<FooterSection>
			<GoogleMap zoom={17} center={{ lat: 55.679370, lng: 12.579320 }}>
				<MapMarker active={true} position={{ lat: 55.679370, lng: 12.579320 }} />
			</GoogleMap>
		</FooterSection>
		<FooterSectionAddress>
			<Address itemScope="" itemType="http://schema.org/ProfessionalService">
				<p itemProp="name">BUSY ApS</p><br />
				<div className="address" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">
					<p itemProp="streetAddress">Købmagergade 5, 3. sal</p>
					<p><span itemProp="postalCode">1150</span> <span itemProp="addressLocality">København K</span></p>
				</div>
				<br />
				<a href="tel:+4530124205" className="phone" itemProp="telephone" content="+4530124205">30 12 42 05</a>
				<p><a itemProp="email" className="email" href="mailto:brian@busycph.dk">brian@busycph.dk</a></p>
				<br />
				<p>CVR <span itemProp="vatID">38581163</span></p>
				<SoMeLinks>
					<li>
						<a href="https://www.linkedin.com/company/18059899" aria-label="LinkedIn">
							<SoMeLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fff" fillRule="evenodd" d="M3.0838546 17.2385999h2.98182535V6.48467649H3.0838546V17.2385999zM4.65862188 5.2920407C3.65051963 5.2920407 3 4.55602928 3 3.64659208 3 2.7146667 3.67157563 2 4.69999507 2c1.02841945 0 1.65862188.7146667 1.67967788 1.64659208 0 .9094372-.65125843 1.64544862-1.72105107 1.64544862zM15.07063 17.292724v-5.9780441c0-1.36529924-.6715757-2.29646231-1.8255923-2.29646231-.8817663 0-1.6161405.62814439-1.8470177 1.23494411-.0838546.2168775-.1049106.519515-.1049106.8229148v6.2166475H8.31128405V9.97110653c0-1.32108522.00997389-2.47941701-.0313993-3.43268711l2.71807125-.05374293.1477614 1.58027101h.0627986c.4196424-.69255968 1.4480618-1.71100737 3.1702211-1.71100737C16.4780574 6.35394013 18 7.80538055 18 10.9243766v6.3683474h-2.92937z"></path></SoMeLogo>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/busycph" aria-label="Instagram">
							<SoMeLogo
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								viewBox="0 0 20 20"
							>
								<defs>
									<path
										id="instagramPath"
										d="M0 .00567857h17.9943214V17.9978571H0z"
									/>
								</defs>
								<g fill="none" fillRule="evenodd">
									<g transform="translate(1 1)">
										<mask
											id="instagramMask"
											fill="#fff"
										>
											<use
												xlinkHref="#instagramPath"
											/>
										</mask>
										<path
											fill="#fff"
											d="M8.99717857.00567857c-2.4435 0-2.74989286.01035714-3.70953571.05414286C4.33.1035 3.67596429.25560714 3.10367857.4780357 2.51203571.70792857 2.01028571 1.01557143 1.51007143 1.51575 1.00989286 2.01596429.70225 2.51771429.47235714 3.10935714.24992857 3.68164286.09782143 4.33567857.05414286 5.29332143.01035714 6.25296429 0 6.55935714 0 9.00285714c0 2.44346426.01035714 2.74985716.05414286 3.70949996.04367857.9576429.19578571 1.6116786.41821428 2.1839643.22989286.5916429.53753572 1.0933929 1.03771429 1.5936072.50021428.5001785 1.00196428.8078214 1.59360714 1.03775.57228572.2223928 1.22632143.3745 2.18396429.4181785C6.24728571 17.9896429 6.55367857 18 8.99717857 18c2.44346433 0 2.74985713-.0103571 3.70950003-.0541429.9576428-.0436785 1.6116785-.1957857 2.1839643-.4181785.5916428-.2299286 1.0933928-.5375715 1.5936071-1.03775.5001786-.5002143.8078214-1.0019643 1.03775-1.5936072.2223929-.5722857.3745-1.2263214.4181786-2.1839643.0437857-.9596428.0541428-1.2660357.0541428-3.70949996 0-2.4435-.0103571-2.74989285-.0541428-3.70953571-.0436786-.95764286-.1957857-1.61167857-.4181786-2.18396429-.2299286-.59164285-.5375714-1.09339285-1.03775-1.59360714-.5002143-.50017857-1.0019643-.80782143-1.5936071-1.03771429C14.3183571.25560714 13.6643214.1035 12.7066786.05982143 11.7470357.0160357 11.4406429.00567857 8.99717857.00567857zm0 1.62110714c2.40232143 0 2.68689283.00917858 3.63560713.05246429.8772143.04 1.3536072.18657143 1.6706429.30978571.4199643.16321429.7196785.35817858 1.0345.67303572.3148571.31482143.5098214.61453571.6730357 1.0345.1232143.31703571.2697857.79342857.3097857 1.67064286.0432857.94871428.0524643 1.23328571.0524643 3.63564285 0 2.40232146-.0091786 2.68689286-.0524643 3.63560716-.04.8772143-.1865714 1.3536071-.3097857 1.6706428-.1632143.4199643-.3581786.7196786-.6730357 1.0345-.3148215.3148572-.6145357.5098215-1.0345.6730358-.3170357.1232142-.7934286.2697857-1.6706429.3097857-.9485714.0432857-1.2331071.0524643-3.63560713.0524643-2.40253571 0-2.68703571-.0091786-3.63564286-.0524643-.87721428-.04-1.35360714-.1865715-1.67064285-.3097857-.41996429-.1632143-.71967857-.3581786-1.0345-.6730358-.31482143-.3148214-.50982143-.6145357-.67303572-1.0345-.12321428-.3170357-.26978571-.7934285-.30978571-1.6706428-.04328572-.9487143-.05246429-1.2332857-.05246429-3.63560716 0-2.40235714.00917857-2.68692857.05246429-3.63564285.04-.87721429.18657143-1.35360715.30978571-1.67064286.16321429-.41996429.35817857-.71967857.67303572-1.0345.31482143-.31485714.61453571-.50982143 1.0345-.67303572.31703571-.12321428.79342857-.26978571 1.67064285-.30978571.94871429-.04328571 1.23328572-.05246429 3.63564286-.05246429z"
											mask="url(#instagramMask)"
										/>
									</g>
									<path
										fill="#fff"
										d="M10.00001739 12.9210545c-1.61327876 0-2.92107185-1.3077931-2.92107185-2.92103711 0-1.61327876 1.30779309-2.92107185 2.92107185-2.92107185 1.61324401 0 2.92103711 1.30779309 2.92103711 2.92107185 0 1.61324401-1.3077931 2.92103711-2.92103711 2.92103711zm0-7.4210545C7.51470264 5.5 5.5 7.51470264 5.5 10.00001739 5.5 12.4852974 7.51470264 14.5 10.00001739 14.5 12.4852974 14.5 14.5 12.4852974 14.5 10.00001739 14.5 7.51470264 12.4852974 5.5 10.00001739 5.5zM15.7857143 5.17858738c0 .53256526-.4317364.96426976-.9643017.96426976-.5325333 0-.9642697-.4317045-.9642697-.96426976 0-.53256527.4317364-.96430167.9642697-.96430167.5325653 0 .9643017.4317364.9643017.96430167"
									/>
								</g>
							</SoMeLogo>
						</a>
					</li>
				</SoMeLinks>
			</Address>
			<Picture>
				<img src="/images/brian.png" alt="Picture of Brian Frisch" />
			</Picture>
		</FooterSectionAddress>
	</Footer>
)