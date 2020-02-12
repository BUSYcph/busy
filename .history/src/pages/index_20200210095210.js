import React from "react"
import styled from "styled-components";
import About from "../components/About";
import Clients from "../components/Clients";
import Legend from "../components/Legend";
import Logo from "../components/Logo";
import Work from "../components/Work";
import Footer from "../components/Footer";
import { theme } from '../theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

const FontProvider = createGlobalStyle`
	h2 {
		font-family: "europa", sans-serif;
		font-weight: 300;
	}
`
const Container = styled.div`
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default () => (
	<Layout>
		<Logo />
		<Legend />
		<Clients />
		<About />
		<Work />
	</Layout>
)