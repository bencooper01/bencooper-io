import { Button, Container, Stack, Text, Box, Image, Heading, Link, Wrap, WrapItem, Divider } from "@chakra-ui/react";

interface Props {
	title: string;
}

export const SectionHeader: React.FC<Props> = (props) => {
	const { title } = props;
	return (
		<Box>
			<Text marginTop="5" fontSize="4xl" fontWeight={400}>
				{title}
			</Text>
			<Divider marginBottom="1" />
		</Box>
	);
};

export default SectionHeader;
