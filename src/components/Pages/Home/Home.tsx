import React from "react";
import EpisodeAtTop from "../../Card/EpisodeAtTop/EpisodeAtTop";
import "./Home.css";
import Episode from "../../Card/Episode/Episode";
import Character from "../../Card/Character/Character";
import { Link } from "react-router-dom";
import { CharacterType, EpisodeList, EpisodeType } from "../../../types";
import useHomeQuery from "../../../Hooks/useHomeQuery";
import { Toolbar } from "@material-ui/core";
import HomeLoader from "../../../loaders/HomeLoader";

const Home = () => {
	const { loading, error, episodeList, charactersList } = useHomeQuery();
	if (loading) return <HomeLoader />;

	if (error) return <div className="error">Error ...</div>;
	return (
		<>
			<Toolbar />
			<div className="home">
				<h1>Watch Now</h1>
				<Link
					to="/episodes/1"
					style={{ textDecoration: "none", color: "black" }}
				>
					<EpisodeAtTop id="1" />
				</Link>
				<div className="maincontent">
					<div className="episodePanel">
						<h2>Episodes</h2>
						<h2>
							<Link to="/episodes" style={{ color: "black" }}>
								View All Episodes
							</Link>
						</h2>
					</div>
					<div className="episodeList">
						{episodeList.map((val: EpisodeType) => (
							<Link
								to={`/episodes/${val.id}`}
								key={val.id}
								style={{ textDecoration: "none", color: "black" }}
							>
								<Episode episodeItems={val} />
							</Link>
						))}
					</div>
				</div>
				<div className="maincontent">
					<div className="characterPanel">
						<h2>Characters</h2>
						<h2>
							<Link to="/characters" style={{ color: "black" }}>
								View All Characters
							</Link>
						</h2>
					</div>
					<div className="characterList">
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
				</div>
			</div>
			<hr />
		</>
	);
};

export default Home;
