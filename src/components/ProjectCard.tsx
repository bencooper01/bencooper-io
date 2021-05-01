import { Container, Typography, Divider, Box, Card, CardContent, CardActions, Button, CardMedia, Chip, Grid, Link, IconButton, Avatar } from "@material-ui/core";
import { AccessAlarm, Twitter, GitHub } from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import { theme } from "../styles/theme";
import GithubCorner from "react-github-corner";
// import img from "../../public/every-two.jpg";
import { useEffect } from "react";
import { NewsletterForm } from "./NewsletterForm";
// import { Card as BootstrapCard, Container as BootstrapContainer, Button as BootstrapButton, Badge } from "react-bootstrap";
import Image from "next/image";
import useStyles from "../styles/styles";

interface Props {
	title: string;
	link: string;
	caption: string;
}

export const ProjectCard: React.FC<Props> = (props) => {
	const classes = useStyles();
	const { title, link, caption } = props;

	return (
		<Grid item xs={9} sm={3}>
			<Box>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image="/every-two.jpg" />

					<CardContent className={classes.cardContent}>
						<Box mb={0}>
							<Chip label="React Native" size={"small"} className={classes.chip} />
						</Box>
						<Box>
							<Typography>{props.title}</Typography>
						</Box>
						<Box mt={1}>
							<Button size="large" variant="contained" disabled={true} className={classes.button} color="primary" href="https:\\apple.com" disableRipple={true}>
								App Store (soon)
							</Button>
						</Box>
					</CardContent>
				</Card>
			</Box>
		</Grid>
	);
};
