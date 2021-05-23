import { Typography, Box, Card, CardContent, CardActions, Button, CardMedia, Chip, Grid, Link, IconButton, Avatar } from "@material-ui/core";
import { AccessAlarm, Twitter, GitHub } from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createMuiTheme, StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import { theme } from "../styles/theme";
import GithubCorner from "react-github-corner";
// import img from "../../public/every-two.jpg";
import { useEffect } from "react";
import { NewsletterForm } from "../components/NewsletterForm";
// import { Card as BootstrapCard, Container as BootstrapContainer, Button as BootstrapButton, Badge } from "react-bootstrap";
import Image from "next/image";
import useStyles from "../styles/styles";
import Projects from "../containers/Projects";
import AboutMe from "../components/AboutMe";
import SectionHeader from "../components/SectionHeader";
import { Heading, Container, Divider, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";

export const Home = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container maxW="container.lg">
				<GithubCorner href="https://github.com/bencooper01" target="_blank" />

				<AboutMe />
				<SectionHeader title={"Projects"} />

				<Projects />

				<Box pt={15} pb={10}>
					<NewsletterForm />
				</Box>
				<Footer />
			</Container>
		</ThemeProvider>
	);
};

export default Home;
