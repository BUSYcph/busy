import React from "react"
import Layout from "../components/Layout";
import About from "../components/About";
import Clients from "../components/Clients";
import Legend from "../components/Legend";
import Logo from "../components/Logo";
import Work from "../components/Work";
import SEO from "../components/SEO";

export default () => (
	<Layout>
		<SEO title="BUSY" />
		<Logo />
		<Legend />
		<Clients />
		<About />
		<WeDo>
			We do<br />
			Frontend Code React, JavaScript, Sketch, HTML, CSS<br />
			UX / Wireframe / graphical design Sketch, Photoshop, Illustrator, Procreate, Animation
		</WeDo>
		<Work />
	</Layout>
)