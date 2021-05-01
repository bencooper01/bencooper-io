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
import useStyles from "../styles/styles";
import Image from "next/image";
interface Props {
	title?: string;
	link?: string;
	caption?: string;
}

export const ProjectCard: React.FC<Props> = (props) => {
	const classes = useStyles();
	const { title, link, caption } = props;

	return (
		<Grid item xs="auto" sm={3}>
			<Box>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image="/every-two.jpg" />

					<CardContent className={classes.cardContent}>
						<Typography variant="h6">{props.title}</Typography>
						<Typography>{props.caption}</Typography>
					</CardContent>
					<CardActions style={{ alignContent: "center", justifyContent: "center", marginBottom: 0, paddingTop: 5, marginTop: 0 }}>
						<Button size="large" variant="contained" disabled={true} className={classes.button} color="primary" href="https:\\apple.com" disableRipple={true}>
							App Store (soon)
						</Button>
					</CardActions>
				</Card>
			</Box>
		</Grid>
	);
};
