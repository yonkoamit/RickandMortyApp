import { Toolbar } from "@material-ui/core";
import React from "react";
import ContentLoader from "react-content-loader";
import EpisodeAtTopLoader from "./EpisodeAtTopLoader";

function EpisodeDetailsLoader() {
	const myArray = Array.apply(null, Array(30)).map((x, i) => {
		return i;
	});
	return (
		<>
			<Toolbar />
			<div className="episodeDetails">
				<EpisodeAtTopLoader />
				<h1>
					<ContentLoader width="200" height="38">
						<rect x="0" y="0" width="200" height="38" />
					</ContentLoader>
				</h1>
				<div className="starringList">
					{myArray.map((val) => (
						<ContentLoader
							className="starring"
							width="184"
							height="240"
							key={val}
						>
							<rect x="0" y="0" width="184" height="240" />
						</ContentLoader>
					))}
				</div>
			</div>
		</>
	);
}

export default EpisodeDetailsLoader;
