import { Container, Typography, Divider, Box, Card, CardContent, CardActions, Button, CardMedia, Chip, Grid, Link, IconButton, Avatar } from "@material-ui/core";
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
import { ProjectCard } from "../components/ProjectCard";

const Home = (props) => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<GithubCorner href="https://github.com/bencooper01" />

				<Box pt={8} pb={4} display="flex" justifyContent="center" flexDirection="column">
					<Typography variant="h4" style={{ color: "#14487f", marginBottom: 1 }}>
						Ben Cooper
						<IconButton href="https://twitter.com/bend_cooper" disableRipple={true} edge={false} style={{ outline: "none", marginLeft: 3 }} size="small">
							<Twitter className={classes.twitter} />
						</IconButton>
					</Typography>
					<Box>
						<div className={classes.benImg}>
							<Image src="/bencooper4.jpg" height={155} width={150} quality={"100"} className={classes.benImg} />
						</div>
						<Typography variant="body2" className={classes.text} style={{ fontSize: 20 }}>
							I'm a 17 year old developer, currently working on Every Two (iOS and Android). Email me anytime at{" "}
							<a href="mailto: bdcooper14@gmail.com" style={{ color: "#14487f" }}>
								bdcooper14@gmail.com
							</a>
							.
							<br />
						</Typography>
					</Box>
				</Box>

				<Typography variant="h4">
					Projects
					<Divider />
				</Typography>

				<Box pt={1} pb={20}>
					<Grid container className={classes.container} spacing={2}>
						<ProjectCard title={"Every Two"} caption={"My first app, a budget planner, launching in 2021."} />
					</Grid>
				</Box>

				<Box pb={5}>
					<NewsletterForm />
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Home;
