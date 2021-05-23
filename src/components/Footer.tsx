import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactNode } from "react";

export default function SmallWithSocial() {
	return (
		<Box bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
			<Container as={Stack} maxW={"6xl"} py={4} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
				<Text mt={3}>© 2020 Ben Cooper</Text>
				<Stack direction={"row"} spacing={2}>
					<IconButton as="a" href="https://github.com/bencooper01" aria-label="GitHub" icon={<FaGithub fontSize="22px" />} variant="ghost" target="_blank" />
					<IconButton as="a" href="https://twitter.com/bend_cooper" aria-label="Twitter" icon={<FaTwitter fontSize="22px" />} variant="ghost" target="_blank" />
				</Stack>
			</Container>
		</Box>
	);
}
