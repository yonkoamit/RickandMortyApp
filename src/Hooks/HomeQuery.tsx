import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import {CharacterType, EpisodeList,EpisodeType} from '../types';
const ALL_EPISODES=gql`
    {
        episodes{
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
`
const ALL_CHARACTERS=gql`
    {
        characters(page:1){
            results{
              id
              name
              species
              gender
              image
            }
          }
    }
`



function HomeQuery() {

    const episodesQuery=useQuery(ALL_EPISODES);
    const charactersQuery=useQuery(ALL_CHARACTERS);

    let episodeList:EpisodeType[]=[];
    let charactersList:CharacterType[]=[];

    const loading=(episodesQuery.loading || charactersQuery.loading);
    const error=(episodesQuery.error || charactersQuery.error)

    if(loading) return {loading,error,episodeList,charactersList};
    if(error) return {loading,error,episodeList,charactersList};
    
    const episodeArray=episodesQuery.data.episodes.results.slice(0,8);
    episodeList=episodeArray.map((val:EpisodeList)=>({
        id:val.id,
        name:val.name,
        air_date:val.air_date,
        episode:val.episode,
        char_count:val.characters.length
    }));
    charactersList=charactersQuery.data.characters.results.slice(0,8);
    return {loading,error,episodeList,charactersList};
    




}

export default HomeQuery
