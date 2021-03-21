import { Container, Typography, Divider, Box, Card, CardContent, CardActions, Button, CardMedia, Chip } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import styles from "../styles/styles.module.css";
import { theme } from "../styles/theme";
import img from "../images/every-two.jpg";

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		maxWidth: 275,
	},
	media: {
		backgroundSize: "65%",
		backgroundColor: "#fafafa",
		height: 150,
	},
	button: {
		textTransform: "capitalize",
	},
	chip: {
		marginRight: 4,
	},
});

function Home() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="md">
				<Box pt={10} mb={1}>
					<Typography variant="h3">Ben Cooper</Typography>
					<Typography variant="h6">Hey, I'm Ben. I'm a 17 year old from AZ learning how to code.</Typography>
				</Box>
				<Divider />
				<Box pt={2}>
					<Card className={classes.card}>
						<CardMedia className={classes.media} image={img} title="hello" />

						<CardContent>
							<Box mb={2}>
								<Chip label="React Native" size={"small"} className={classes.chip} />
								<Chip label="Sqlite" size={"small"} className={classes.chip} />
							</Box>
							<Typography>Every Two: Paycheck Budget Planner</Typography>

							<Box mt={1}>
								<Button size="large" variant="contained" className={classes.button} color="primary" href="https:\\apple.com">
									Go
								</Button>
							</Box>
						</CardContent>
					</Card>
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default Home;
