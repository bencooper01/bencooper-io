import { Container, Typography, TextField, Box, Button } from "@material-ui/core";
import { AccessAlarm, Twitter, GitHub } from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import { theme } from "../styles/theme";
import GithubCorner from "react-github-corner";
import { useEffect } from "react";
import Image from "next/image";
import useStyles from "../styles/styles";
import React from "react";

export const NewsletterForm = (props) => {
	const [email, setEmail] = React.useState("");

	return (
		<Box style={{ justifyContent: "center", alignSelf: "center", alignContent: "center", alignItems: "center" }}>
			<Typography variant="h6" style={{ textAlign: "center" }}>
				Updates on what I'm working on, once a month.
			</Typography>

			<form action="https://gmail.us1.list-manage.com/subscribe/post?u=7eb246d13da7a0da8b627c327&id=ff0b812431" method="POST" noValidate>
				<Box style={{ alignContent: "center", justifyContent: "center" }} align="center">
					<TextField
						label="Email address"
						required
						style={{ width: "50%" }}
						placeholder="ben@bencooper.net"
						color="secondary"
						type="email"
						name="EMAIL"
						id="MERGE0"
						tabIndex={-1}
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>

					<div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
						<input type="text" name="b_7eb246d13da7a0da8b627c327_ff0b812431" tabIndex={-1} value=""></input>
					</div>

					<Button variant="contained" style={{ verticalAlign: "bottom", marginLeft: 5, marginBottom: 1 }} color="secondary" size="large" type="submit" value="Subscribe" name="subscribe">
						Subscribe
					</Button>
				</Box>
			</form>
		</Box>
	);
};
