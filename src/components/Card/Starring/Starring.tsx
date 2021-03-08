import "./Starring.css";
import { StarringpropsType } from "../../../types";
function Starring({ image, name }: StarringpropsType) {
	return (
		<div className="starring">
			<img src={image} />
			<h2>{name}</h2>
		</div>
	);
}

export default Starring;
