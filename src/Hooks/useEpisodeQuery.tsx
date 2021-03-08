import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { EpisodeList, EpisodeType } from "../types";

export function getEpisodes(a: number, b: string) {
	return gql`
    query getEpisodes{
        episodes(page: ${a},filter:{name:"${b}"}){
            info{
                pages
                next
                prev
            }
            results{
              id
              name
              air_date
              episode
              characters{
                id
              }
            }
          }
        }
`;
}

function useEpisodeQuery(page: number, episodeSearch: string) {
	const { loading, error, data } = useQuery(getEpisodes(page, episodeSearch));

	let episodeList: EpisodeType[] = [];
	let info = {} as { next: number; prev: number; pages: number };

	if (loading) return { loading, error, episodeList, info };
	if (error) return { loading, error, episodeList, info };

	info = data.episodes.info;

	const episodeArray = data.episodes.results;

	episodeList = episodeArray.map((val: EpisodeList) => ({
		id: val.id,
		name: val.name,
		air_date: val.air_date,
		episode: val.episode,
		char_count: val.characters.length,
	}));

	return { loading, error, episodeList, info };
}

export default useEpisodeQuery;
