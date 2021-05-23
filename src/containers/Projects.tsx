import { Button, Container, Stack, Text, Box, Image, Heading, Link, Wrap, WrapItem } from "@chakra-ui/react";
import useStyles from "../styles/styles";
interface Props {
	title?: string;
	link?: string;
	caption?: string;
}
import ProjectCard from "../components/ProjectCard";

export const Projects: React.FC<Props> = (props) => {
	const classes = useStyles();
	const { title, link, caption } = props;

	return (
		<Box>
			<Wrap mt="2">
				<ProjectCard title="Every Two" link="https://apple.com" caption="My first app, a budget planner." imgSrc="/every-two.jpg" />
			</Wrap>
		</Box>
	);
};

export default Projects;
