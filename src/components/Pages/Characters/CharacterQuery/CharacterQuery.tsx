import React from "react";
import Character from "../../../Card/Character/Character";
import { Link } from "react-router-dom";
import { CharacterType, CharacterQueryProps } from "../../../../types";
import useCharacterQuery from "../../../../Hooks/useCharacterQuery";
import CharacterQueryLoader from "../../../../loaders/CharacterQueryLoader";

function CharacterQuery({
	characterSearch,
	onClickHandler,
	page,
}: CharacterQueryProps) {
	const { loading, error, charactersList, info } = useCharacterQuery(
		page,
		characterSearch
	);
	if (loading) return <CharacterQueryLoader />;
	if (error) return <div className="error">Oops! Not Found</div>;

	let buttons = <div></div>;
	if (info.next && info.prev) {
		buttons = (
			<div className="movementButtons">
				<button
					onClick={() => {
						onClickHandler(page - 1);
					}}
				>
					prev
				</button>
				<button
					onClick={() => {
						onClickHandler(page + 1);
					}}
				>
					next
				</button>
			</div>
		);
	} else if (info.next) {
		buttons = (
			<div className="movementButtons">
				<button
					onClick={() => {
						onClickHandler(page + 1);
					}}
				>
					next
				</button>
			</div>
		);
	} else if (info.prev) {
		buttons = (
			<div className="movementButtons">
				<button
					onClick={() => {
						onClickHandler(page - 1);
					}}
				>
					prev
				</button>
			</div>
		);
	}

	return (
		<div>
			<div className="episodeList">
				{charactersList.map((val: CharacterType) => (
					<Link
						to={`/characters/${val.id}`}
						key={val.id}
						style={{ textDecoration: "none", color: "black" }}
					>
						<Character key={val.id} characterItems={val} />
					</Link>
				))}
			</div>

			{buttons}
			<div className="pageNumber">
				{page}/{info.pages}
			</div>
		</div>
	);
}

export default CharacterQuery;
