import { Container, Typography, TextField, Box, Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import { theme } from "../styles/theme";
import useStyles from "../styles/styles";
import React from "react";
import { Card, Grid } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";

export const NewsletterForm = (props) => {
	const [email, setEmail] = React.useState("");

	return (
		<Grid container justify="center" spacing={0}>
			<Grid item xs={12} sm={7}>
				<Card style={{ textAlign: "center", paddingRight: 2.5, paddingLeft: 2.5, paddingTop: 15, paddingBottom: 15 }}>
					<Typography variant="h6" style={{ textAlign: "center" }}>
						Monthly updates on what I'm working on
						<ArrowDownward style={{ verticalAlign: "middle" }} fontSize="small" color="secondary" />
					</Typography>
					<form action="https://gmail.us1.list-manage.com/subscribe/post?u=7eb246d13da7a0da8b627c327&id=ff0b812431" method="POST" noValidate>
						<Box style={{ textAlign: "center", paddingTop: 1 }}>
							<TextField
								label="Email address"
								required
								style={{ width: "50%", minWidth: 200, alignSelf: "center", justifyContent: "center", textAlign: "center" }}
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
				</Card>
			</Grid>
		</Grid>
	);
};
