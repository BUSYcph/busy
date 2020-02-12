import React from "react"
import Layout from "../components/Layout";
import About from "../components/About";
import Clients from "../components/Clients";
import Legend from "../components/Legend";
import Logo from "../components/Logo";
import Work from "../components/Work";
import SEO from "../components/SEO";
import Disciplines from "../components/Disciplines";

export default () => (
	<Layout>
		<SEO title="BUSY" />
		<Logo />
		<Legend />
		<Clients />
		<About />
		<Disciplines />
		<Work />
	</Layout>
)