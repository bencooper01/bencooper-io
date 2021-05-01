import { makeStyles, withStyles } from "@material-ui/core/styles";
import { theme } from "./theme";

export const useStyles = makeStyles(
	{
		container: {
			[theme.breakpoints.down("xs")]: {
				justifyContent: "center",
				alignItems: "center",
			},
		},

		media: {
			backgroundSize: "65%",
			backgroundColor: "#fafafa",
			height: 115,
			width: "auto",
			justifyContent: "center",
			alignContent: "center",
		},
		button: {
			textTransform: "capitalize",
			alignContent: "center",
			justifyContent: "center",
			textAlign: "center",
		},
		chip: {
			marginTop: 2,
			marginRight: 4,
		},
		cardContent: {
			marginTop: 0,
			paddingTop: 2.5,
			marginBottom: 0,
			textAlign: "center",
			paddingBottom: 2.5,
		},
		card: {
			width: 225,
			height: 265,
		},

		text: { fontSize: 21 },
		twitter: {
			color: "#00ACEE",
			// fontSize: 50,
		},
		twitterLink: {
			paddingTop: 5,
		},
		link: {
			color: "black",
		},
		benImg: {
			marginBottom: 1,
			borderRadius: 3,
			marginRight: 10,
			marginTop: 6,
			float: "left",
		},
	},
	{ index: 1 }
);

export default useStyles;
