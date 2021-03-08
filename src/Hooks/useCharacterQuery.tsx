import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { CharacterType } from "../types";

function getCharacters(a: number, b: string) {
	return gql`
    query getCharacters{
        characters(page: ${a},filter:{name:"${b}"}){
            info{
                pages
                next
                prev
            }
            results{
                id
                name
                gender
                image
                species
            }
          }
        }
`;
}

function useCharacterQuery(page: number, characterSearch: string) {
	const { loading, error, data } = useQuery(
		getCharacters(page, characterSearch)
	);
	let charactersList: CharacterType[] = [];
	let info = {} as { next: number; prev: number; pages: number };
	if (loading || error) return { loading, error, charactersList, info };
	info = data.characters.info;
	charactersList = data.characters.results;
	return { loading, error, charactersList, info };
}

export default useCharacterQuery;
