import { Container, Typography, Divider, Box, Card, CardContent, CardActions, Button, CardMedia, Chip, Grid, Link, IconButton } from "@material-ui/core";
import { AccessAlarm, Twitter } from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import styles from "../styles/styles.module.css";
import { theme } from "../styles/theme";
import img from "../images/every-two.jpg";
import { useEffect } from "react";
// import { Card as BootstrapCard, Container as BootstrapContainer, Button as BootstrapButton, Badge } from "react-bootstrap";

const useStyles = makeStyles({
	container: {
		[theme.breakpoints.down("xs")]: {
			justifyContent: "center",
		},
	},
	media: {
		backgroundSize: "65%",
		backgroundColor: "#fafafa",
		height: 115,
	},
	button: {
		textTransform: "capitalize",
		alignContent: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	chip: {
		marginTop: 2,
		marginRight: 4,
	},
	cardContent: {
		marginTop: 0,
		paddingTop: 2.5,
		textAlign: "center",
	},
	card: {
		minWidth: 100,
	},

	text: { fontSize: 21 },
	twitter: {
		color: "#00ACEE",
	},
	twitterLink: {
		paddingTop: 5,
	},
	link: {
		color: "black",
	},
});

function Home() {
	const styles = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<Box pt={8} mb={3}>
					<Typography variant="h4" style={{ color: "#14487f" }}>
						Ben Cooper
						<IconButton href="https://twitter.com/bencooper_01" disableRipple={true} edge={false} style={{ outline: "none", marginLeft: 3 }} size="small">
							<Twitter className={styles.twitter} />
						</IconButton>
					</Typography>

					<Typography variant="subtitle1" className={styles.text}>
						I'm a 17 year old developer. 💻
					</Typography>
				</Box>

				<Typography variant="h4">
					Projects
					<Divider />
				</Typography>

				<Box pt={1} pb={1}>
					<Grid container className={styles.container} spacing={1}>
						<Grid item xs={9} sm={3}>
							<Box>
								<Card className={styles.card}>
									<CardMedia className={styles.media} image={img} title="hello" />

									<CardContent className={styles.cardContent}>
										<Box mb={1}>
											<Chip label="React Native" size={"small"} className={styles.chip} />
										</Box>
										<Box>
											<Typography>Every Two: Paycheck Budget Planner</Typography>
										</Box>
										<Box mt={1}>
											<Button size="large" variant="contained" className={styles.button} color="primary" href="https:\\apple.com" disableRipple={true}>
												App Store
											</Button>
										</Box>
									</CardContent>
								</Card>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Home;
