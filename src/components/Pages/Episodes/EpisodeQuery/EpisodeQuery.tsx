import React from "react";
import { Link } from "react-router-dom";
import Episode from "../../../Card/Episode/Episode";
import "./EpisodeQuery.css";
import { EpisodeQueryprops, EpisodeType } from "../../../../types";
import useEpisodeQuery from "../../../../Hooks/useEpisodeQuery";
import EpisodeQueryLoader from "../../../../loaders/EpisodeQueryLoader";

function EpisodeQuery({
	episodeSearch,
	onClickHandler,
	page,
}: EpisodeQueryprops) {
	const { loading, error, episodeList, info } = useEpisodeQuery(
		page,
		episodeSearch
	);
	if (loading) return <EpisodeQueryLoader />;
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
				{episodeList.map((val: EpisodeType) => (
					<Link
						key={val.id}
						to={`/episodes/${val.id}`}
						style={{ textDecoration: "none", color: "black" }}
					>
						<Episode episodeItems={val} />
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

export default EpisodeQuery;
