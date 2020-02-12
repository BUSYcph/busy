import React from "react"
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