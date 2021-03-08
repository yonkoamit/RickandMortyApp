import "./Character.css";
import { SingleCharacterType } from "../../../types";
function Character<Object extends SingleCharacterType>(props: Object) {
	const characterDetails = props.characterItems;

	return (
		<div className="character">
			<img src={characterDetails.image} alt="Character Image" />
			<span>Species: {characterDetails.species}</span>
			<h4>{characterDetails.name}</h4>
			<span>Gender: {characterDetails.gender}</span>
		</div>
	);
}

export default Character;
