import React from "react";
import { useParams } from "react-router";
import gql from "graphql-tag";
import Starring from "../../Card/Starring/Starring";
import "./EpisodeDetails.css";
import EpisodeAtTop from "../../Card/EpisodeAtTop/EpisodeAtTop";
import { Link } from "react-router-dom";
import { starringListType } from "../../../types";
import useEpisodeDetailsQuery from "../../../Hooks/useEpisodeDetailsQuery";
import { Toolbar } from "@material-ui/core";
import EpisodeDetailsLoader from "../../../loaders/EpisodeDetailsLoader";

function EpisodeDetails() {
	const { id } = useParams<{ id: string }>();
	const { loading, error, starringList } = useEpisodeDetailsQuery(id);
	if (loading) return <EpisodeDetailsLoader />;
	if (error) return <div className="error">Oops! Not Found</div>;
	return (
		<>
			<Toolbar />
			<div className="episodeDetails">
				<EpisodeAtTop id={id} />
				<h1>Starring</h1>
				<div className="starringList">
					{starringList.map((val: starringListType) => (
						<Link
							to={`/characters/${val.id}`}
							key={val.id}
							style={{ textDecoration: "none", color: "black" }}
						>
							<Starring image={val.image} name={val.name} />
						</Link>
					))}
				</div>
			</div>
			<hr />
		</>
	);
}

export default EpisodeDetails;
