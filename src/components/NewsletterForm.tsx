import { Typography, TextField, Box } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import { theme } from "../styles/theme";
import useStyles from "../styles/styles";
import React from "react";
import { Card, Grid, CardContent } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import { FormEvent, ChangeEvent, useState } from "react";
import { Stack, FormControl, Input, Button, useColorModeValue, Heading, Text, Container, Flex } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const NewsletterForm = (props) => {
	const [email, setEmail] = React.useState("");
	const classes = useStyles();

	return (
		<Flex align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
			<Container
				bg={useColorModeValue("white", "whiteAlpha.100")}
				rounded={"lg"}
				p={6}
				direction={"column"}
				maxW={{ base: "400" }}
				boderColor="#822727"
				borderWidth={1}
				style={{ borderColor: "#EDF2F7" }}
			>
				<Heading as={"h2"} fontSize={{ base: "xl", sm: "2xl" }} textAlign={"center"} mb={5}>
					Monthly emails about what I'm working on.
				</Heading>

				<form action="https://gmail.us1.list-manage.com/subscribe/post?u=7eb246d13da7a0da8b627c327&id=ff0b812431" method="POST" noValidate>
					<Stack direction={{ base: "column", md: "row" }} spacing={"12px"}>
						<Input
							variant={"solid"}
							borderWidth={1}
							color={"gray.800"}
							_placeholder={{
								color: "gray.400",
							}}
							borderColor={useColorModeValue("gray.300", "gray.700")}
							type={"email"}
							placeholder={"Your Email"}
							aria-label={"Your Email"}
							tabIndex={-1}
							value={email}
							id="MERGE0"
							name="EMAIL"
							onChange={(event) => setEmail(event.target.value)}
						/>

						<div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
							<input type="text" name="b_7eb246d13da7a0da8b627c327_ff0b812431" tabIndex={-1} value=""></input>
						</div>
						<Box width={{ base: "100%", md: "40%" }}>
							<Button colorScheme={"blue"} w="100%" type="submit" name="subscribe" value="Subscribe">
								Sign up!
							</Button>
						</Box>
					</Stack>
				</form>

				<Text mt={2} textAlign={"center"} color={"gray.500"}>
					I won't spam you.
				</Text>
			</Container>
		</Flex>
	);
};
