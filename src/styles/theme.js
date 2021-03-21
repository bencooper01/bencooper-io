import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: "#FF5500",
		},
		secondary: {
			main: "#e8eddf",
		},
	},
});
