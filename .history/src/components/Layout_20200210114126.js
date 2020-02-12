import React from "react"
import styled from "styled-components";
import Footer from "../components/Footer";
import { theme } from '../theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

const FontProvider = createGlobalStyle`
	h1, h2 {
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

export default ({ children }) => (
	<ThemeProvider theme={theme}>
		<Normalize />
		<FontProvider />
		<Container>
			{children}
		</Container>
		<Footer />
	</ThemeProvider>
)