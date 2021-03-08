import { Toolbar } from "@material-ui/core";
import React from "react";
import ContentLoader from "react-content-loader";

function CharacterDetailsLoader() {
	return (
		<>
			<Toolbar />
			<h1 className="characterHeading">
				<ContentLoader>
					<rect x="0" y="0" width="300" height="119" />
				</ContentLoader>
			</h1>
			<div style={{ margin: "auto", width: "290px" }}>
				<ContentLoader width="290" height="781">
					<rect x="0" y="0" width="290" height="781" />
				</ContentLoader>
			</div>
		</>
	);
}

export default CharacterDetailsLoader;
