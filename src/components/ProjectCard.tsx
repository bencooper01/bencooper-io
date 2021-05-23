import { Button, Container, Stack, Text, Box, Image, Heading, Link, Wrap, WrapItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import useStyles from "../styles/styles";
interface Props {
	title?: string;
	link?: string;
	caption?: string;
	imgSrc: any;
}

/**  Image size: 874px by 874px */
export const ProjectCard: React.FC<Props> = (props) => {
	const classes = useStyles();
	const { title, link, caption, imgSrc } = props;

	return (
		<WrapItem width={{ base: "100%", sm: "45%", md: "27.5%" }}>
			<Stack spacing={0}>
				<Box w="100%" mb={15}>
					<Box overflow="hidden">
						<Link textDecoration="none" href={link} isExternal={true}>
							<Image src={imgSrc} alt="some text" objectFit="contain" height={190} borderRadius="md" />
						</Link>
					</Box>

					<Box mt={2}>
						<Link textDecoration="none" href={link} fontSize="20px" fontWeight={500} isExternal={true}>
							{title}
						</Link>
					</Box>

					<Text as="p" fontSize="md" marginTop="1">
						{caption}
					</Text>
				</Box>
			</Stack>
		</WrapItem>
	);
};

export default ProjectCard;
