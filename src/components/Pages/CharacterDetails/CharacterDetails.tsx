import { Toolbar } from "@material-ui/core";
import { useParams } from "react-router";
import useCharacterDetailsQuery from "../../../Hooks/useCharacterDetailsQuery";
import CharacterDetailsLoader from "../../../loaders/CharacterDetailsLoader";
import "./CharacterDetails.css";

function CharacterDetails() {
	const { id } = useParams<{ id: string }>();
	const { loading, error, data } = useCharacterDetailsQuery(id);
	if (loading) return <CharacterDetailsLoader />;
	if (error) return <div className="error">Oops! Some Error Occured</div>;
	return (
		<>
			<Toolbar />
			<h1 className="characterHeading">{data.character.name}</h1>
			<div className="characterDetails">
				<img src={data.character.image} />
				<div>
					<h4>Gender</h4>
					<h5>{data.character.gender}</h5>
					<hr />
				</div>
				<div>
					<h4>Origin</h4>
					<h5>{data.character.origin.dimension}</h5>
					<h5>Type: {data.character.origin.type}</h5>
					<h5>Name: {data.character.origin.name}</h5>
					<hr />
				</div>
				<div>
					<h4>Species</h4>
					<h5>{data.character.species}</h5>
					<hr />
				</div>
				<div>
					<h4>Status</h4>
					<h5>{data.character.status}</h5>
				</div>
			</div>
			<hr />
		</>
	);
}

export default CharacterDetails;
