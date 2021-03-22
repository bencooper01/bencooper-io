import { Container, Typography, Divider, Box, Card, CardContent, CardActions, Button, CardMedia, Chip, Grid, Link } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import styles from "../styles/styles.module.css";
import { theme } from "../styles/theme";
import img from "../images/every-two.jpg";
import { useEffect } from "react";

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
});

function Home() {
	const styles = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<Box pt={10} mb={3}>
					<Typography variant="h4" color="secondary">
						<Link color="secondary" href="https://twitter.com/bencooper_01">
							Ben Cooper
						</Link>
					</Typography>

					<Typography variant="h6">Hey, I'm Ben. I'm a 17 year old developer just trying to build some cool shit.💻</Typography>
				</Box>

				<Typography variant="h4">Projects</Typography>
				<Divider />
				<Box pt={2}>
					<Grid container className={styles.container} spacing={1}>
						<Grid item xs={10} sm={3}>
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
										<Button size="large" variant="contained" className={styles.button} color="primary" href="https:\\apple.com">
											App Store
										</Button>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Home;
