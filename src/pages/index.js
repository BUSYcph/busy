import React, { useRef } from "react"
import Layout from "../components/Layout";
import About from "../components/About";
import Clients from "../components/Clients";
import Legend from "../components/Legend";
import Logo from "../components/Logo";
import Work from "../components/Work";
import SEO from "../components/SEO";
import Disciplines from "../components/Disciplines";

export default () => {
	const workRef = useRef();
	const onClientClick = () => {
		console.log(workRef);
		workRef.current.scrollIntoView({ behavior: 'smooth' });
	}
	return (
		<Layout>
			<SEO title="BUSY" />
			<Logo />
			<Legend />
			<Clients onClick={onClientClick} />
			<About />
			<Disciplines />
			<Work heading={`Select Client Work`} ref={workRef} />
		</Layout>);
}