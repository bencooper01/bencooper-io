import { Card, CardContent, CardActions, Button, CardMedia, Chip, Grid, Link, Avatar } from "@material-ui/core";
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
import { TiSocialTwitter, TiSocialGithubCircular } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

import { Heading, Container, Divider, Text, Box, IconButton, Icon } from "@chakra-ui/react";

export const AboutMe = (props) => {
	const classes = useStyles();
	return (
		<Box pt={"80px"} pb={4} display="flex" justifyContent="center" flexDirection="column">
			<Heading style={{ fontWeight: 400, color: "#004e98" }} type>
				Ben Cooper
				{/* <IconButton
					href="https://twitter.com/bend_cooper"
					as="a"
					disableRipple={true}
					edge={false}
					style={{ outline: "none", marginLeft: 3.5, color: "#1DA1F2" }}
					size="small"
					icon={<Icon as={TiSocialTwitter} fontSize="33px" />}
					variant="ghost"
				/> */}
			</Heading>
			<Box>
				<div className={classes.benImg}>
					<Image src="/bencooper4.jpg" height={155} width={150} quality={"100"} className={classes.benImg} />
				</div>
				<Text variant="body2" className={classes.text} style={{ fontSize: 20 }}>
					I'm a 17 year old developer, currently working on Every Two (iOS and Android). Email me anytime at{" "}
					<a href="mailto: bdcooper14@gmail.com" style={{ color: "#14487f" }}>
						bdcooper14@gmail.com
					</a>
					.
					<br />
				</Text>
			</Box>
		</Box>
	);
};

export default AboutMe;
