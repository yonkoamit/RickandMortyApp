import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { starringListType } from '../types';
function getEpisode(a:string)
{
    return gql`
    {
        episode(id:${a})
        {   id
            characters{
                id
                name
                image
              }
        }
    }
    `
}


function EpisodeDetailsQuery(id:string) {
    
    const {loading,error,data}=useQuery(getEpisode(id))
    let starringList:starringListType[]=[]
    if(loading || error) return {loading,error,starringList}
    starringList=data.episode.characters;
    return {loading,error,starringList}
}

export default EpisodeDetailsQuery
