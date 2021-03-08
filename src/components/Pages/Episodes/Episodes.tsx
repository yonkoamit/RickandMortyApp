import { Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import EpisodeQuery from "./EpisodeQuery/EpisodeQuery";
import { TextField } from "@material-ui/core";
import "./Episodes.css";

const Episodes = () => {
	const [episodeSearch, setEpisodeSearch] = useState("");
	const [page, setPage] = useState(1);

	function onClickHandler(val: number) {
		setPage(val);
	}

	return (
		<>
			<Toolbar />
			<div className="episodes">
				<div className="episodeSearch">
					<h2>Episodes</h2>
					<h2>
						<TextField
							placeholder="input episode"
							onChange={(e) => {
								setEpisodeSearch(e.target.value);
								setPage(1);
							}}
						/>
					</h2>
				</div>
				<EpisodeQuery
					episodeSearch={episodeSearch}
					onClickHandler={onClickHandler}
					page={page}
				/>
			</div>
			<hr />
		</>
	);
};

export default Episodes;
