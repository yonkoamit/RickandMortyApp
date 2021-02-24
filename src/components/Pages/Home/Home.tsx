import React from 'react'
import EpisodeAtTop from '../../Card/EpisodeAtTop/EpisodeAtTop'
import './Home.css';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import Episode from '../../Card/Episode/Episode';
import Character from '../../Card/Character/Character';
import { Link } from 'react-router-dom';
import {CharacterType,EpisodeList,EpisodeType} from '../../../types';


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

    if(episodesQuery.loading || charactersQuery.loading) return <div className='loading'>Loading ...</div>
    if(episodesQuery.error || charactersQuery.error) return <div className='error'>Error ...</div>
    const episodeArray=episodesQuery.data.episodes.results.slice(0,8);
    const episodeList=episodeArray.map((val:EpisodeList)=>({
        id:val.id,
        name:val.name,
        air_date:val.air_date,
        episode:val.episode,
        char_count:val.characters.length
    }));
    const charactersList=charactersQuery.data.characters.results.slice(0,8);
    return (
        <>
        <div className='home'>
           <h1>Watch Now</h1>
           <EpisodeAtTop id="1"/>
           <div className='maincontent'>
                <div className='episodePanel'>
                    <h2>Episodes</h2>
                    <h2>
                        <Link to='/episodes' style={{color:'black'}}>View All Episodes</Link>
                    </h2>
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
            </div>
            <div className='maincontent'>
                <div className='characterPanel'>
                    <h2>Characters</h2>
                    <h2>
                        <Link to='/characters' style={{color:'black'}}>View All Characters</Link>
                    </h2>
                </div>
                <div className='characterList'>
                {
                    charactersList.map((val:CharacterType)=>(
                        <Link to={`/characters/${val.id}`} key={val.id} style={{textDecoration:'none',color:'black'}}>
                                <Character key={val.id} characterItems={val}/>
                        </Link>
                    ))
                }
                </div>
           </div>
        </div>
        <hr/>
        </>
    )
}

export default Home
