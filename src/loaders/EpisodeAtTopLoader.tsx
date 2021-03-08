import { Toolbar } from "@material-ui/core";
import ContentLoader from "react-content-loader";

const EpisodeAtTopLoader = () => {
	return (
		<div className="episodeAtTop">
			<ContentLoader className="loading" width="1200" height="320">
				<rect x="0" y="0" width="1200" height="320" />
			</ContentLoader>
		</div>
	);
};

export default EpisodeAtTopLoader;
