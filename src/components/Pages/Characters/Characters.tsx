import { TextField, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import CharacterQuery from "./CharacterQuery/CharacterQuery";
import "./Characters.css";
const Characters = () => {
	const [characterSearch, setCharacterSearch] = useState("");
	const [page, setPage] = useState(1);

	function onClickHandler(val: number) {
		setPage(val);
	}

	return (
		<>
			<Toolbar />
			<div className="characters">
				<div className="characterSearch">
					<h2>Characters</h2>
					<h2>
						<TextField
							placeholder="Input Character"
							onChange={(e) => {
								setCharacterSearch(e.target.value);
								setPage(1);
							}}
						/>
					</h2>
				</div>
				<CharacterQuery
					characterSearch={characterSearch}
					onClickHandler={onClickHandler}
					page={page}
				/>
			</div>
			<hr />
		</>
	);
};

export default Characters;
