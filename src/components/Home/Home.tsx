import React from 'react'
import EpisodeAtTop from '../Card/EpisodeAtTop/EpisodeAtTop'
import './Home.css';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import Episode from '../Card/Episode/Episode';
import Character from '../Card/Character/Character';
import { Link } from 'react-router-dom';

type EpisodeList={
    __typename:string,
    id:string,
    name:string,
    air_date:string,
    episode:string,
    characters:{id:string,__typename:string}[]
}
type EpisodeType={
    id:string,
    name:string,
    air_date:string ,
    episode:string ,
    char_count:number
}
type CharacterType={
    __typename:string,
    id:string,
    name:string,
    species:string,
    gender:string,
    image:string
}
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
const Home = () => {
    const episodesQuery=useQuery(ALL_EPISODES);
    const charactersQuery=useQuery(ALL_CHARACTERS);

    if(episodesQuery.loading || charactersQuery.loading) return <p>Loading ...</p>
    if(episodesQuery.error || charactersQuery.error) return <p>Error ...</p>
    const episodeArray=episodesQuery.data.episodes.results.slice(0,8);
    const episodeList=episodeArray.map((val:EpisodeList)=>({
        id:val.id,
        name:val.name,
        air_date:val.air_date,
        episode:val.episode,
        char_count:val.characters.length
    }));
    const charactersList=charactersQuery.data.characters.results.slice(0,8);
    console.log(charactersList);
    return (
        <div className='home'>
           <h2>Watch Now</h2>
           <EpisodeAtTop id="1"/>
           <div className='episodePanel'>
               <h3>Episodes</h3>
               <h3>
                   <Link to='/episodes'>View All Episodes</Link>
                </h3>
           </div>
           <div className='episodeList'>
           {
               episodeList.map((val:EpisodeType)=>(
                   <Link to={`/episodes/${val.id}`} key={val.id} style={{textDecoration:'none',color:'black'}}>
                        <Episode  episodeItems={val}/>
                   </Link>
               ))
           }
           </div>
           <div className='episodePanel'>
               <h3>Characters</h3>
               <h3>
                   <Link to='/characters'>View All Characters</Link>
               </h3>
           </div>
           <div className='episodeList'>
           {
               charactersList.map((val:CharacterType)=>(
                   <Link to={`/characters/${val.id}`} key={val.id} style={{textDecoration:'none',color:'black'}}>
                        <Character key={val.id} characterItems={val}/>
                   </Link>
               ))
           }
           </div>
           <hr/>
        </div>
    )
}

export default Home
