import React from "react";
import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import logo from "../Footer/logo.png";
const Header = () => {
	return (
		<AppBar position="fixed">
			<Toolbar style={{ justifyContent: "center" }}>
				<Link to="/" style={{ color: "white" }}>
					<Typography variant="h5">Rick And Morty</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
