import React from "react"
import Layout from "../components/Layout";
import About from "../components/About";
import Clients from "../components/Clients";
import Legend from "../components/Legend";
import Logo from "../components/Logo";
import Work from "../components/Work";

export default () => (
	<Layout>
		<Logo />
		<Legend />
		<Clients />
		<About />
		<Work />
	</Layout>
)