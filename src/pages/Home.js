import { Container, Typography, Divider, Box, Card, CardContent, CardActions, Button, CardMedia, Chip, Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import styles from "../styles/styles.module.css";
import { theme } from "../styles/theme";
import img from "../images/every-two.jpg";

const useStyles = makeStyles({
	card: {},
	media: {
		backgroundSize: "65%",
		backgroundColor: "#fafafa",
		height: 120,
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
});

function Home() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<Box pt={10} mb={3}>
					<Typography variant="h4" style={{ color: "#004e98" }}>
						Ben Cooper
					</Typography>
					<Typography variant="h6">Hey, I'm Ben. I'm a 17 year old developer just trying to build some cool shit.💻</Typography>
				</Box>

				<Typography variant="h4">Projects</Typography>
				<Divider />
				<Box pt={2}>
					<Grid container pt={3} style={styles.container} spacing={3}>
						<Grid item xs={12} sm={3}>
							<Card className={classes.card}>
								<CardMedia className={classes.media} image={img} title="hello" />

								<CardContent style={{ marginTop: 0, paddingTop: 2.5, textAlign: "center" }}>
									<Box mb={1}>
										<Chip label="React Native" size={"small"} className={classes.chip} />

										<Chip label="Sqlite" size={"small"} className={classes.chip} />
									</Box>
									<Box>
										<Typography>Every Two: Paycheck Budget Planner</Typography>
									</Box>
									<Box mt={1} justif="center" style={{ textAlign: "center" }}>
										<Button size="large" variant="contained" className={classes.button} color="primary" href="https:\\apple.com">
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
