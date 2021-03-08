import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useMemo, useCallback } from "react";
import { CharacterType, EpisodeList, EpisodeType } from "../types";
export const ALL_EPISODES_AND_CHARACTERS = gql`
	{
		episodes {
			results {
				id
				name
				air_date
				episode
				characters {
					id
				}
			}
		}
		characters(page: 1) {
			results {
				id
				name
				species
				gender
				image
			}
		}
	}
`;
function useHomeQuery() {
	const { loading, data, error } = useQuery(ALL_EPISODES_AND_CHARACTERS);

	let episodeList: EpisodeType[] = [];
	let charactersList: CharacterType[] = [];

	[episodeList, charactersList] = useMemo(() => {
		if (!data) {
			return [[], []];
		}

		const episodeArray = data.episodes.results.slice(0, 8);
		const newEpisodeList = episodeArray.map((val: EpisodeList) => ({
			id: val.id,
			name: val.name,
			air_date: val.air_date,
			episode: val.episode,
			char_count: val.characters.length,
		}));

		const newCharactersList = data.characters.results.slice(0, 8);

		return [newEpisodeList, newCharactersList];
	}, [data]);

	return { loading, error, episodeList, charactersList };
}

export default useHomeQuery;
