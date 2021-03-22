import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import "typeface-open-sans";
import "typeface-source-sans-pro";

export const theme = createMuiTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: "#FF5500",
		},
		secondary: {
			main: "#004e98",
		},
	},
	typography: {
		fontFamily: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
	},
});
