import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
function getCharacter(id: string) {
	return gql`
    {
        character(id:${id})
        {   id
            name
            gender
            image
            species
            status
            origin{
              name
              dimension
              type
            }
        }
    }
    `;
}
function useCharacterDetailsQuery(id: string) {
	const { loading, error, data } = useQuery(getCharacter(id));
	if (loading || error) return { loading, error, data };
	return { loading, error, data };
}

export default useCharacterDetailsQuery;
