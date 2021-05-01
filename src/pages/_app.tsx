import React from "react";
import Head from "next/head";
import { Container, Typography, ThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "../styles/theme";
import "../styles/globals.css";

export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Ben Cooper</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Container maxWidth="md">
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		</React.Fragment>
	);
}
