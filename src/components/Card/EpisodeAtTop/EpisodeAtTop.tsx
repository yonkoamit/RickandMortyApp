import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

import image2 from '../../../dumbEasier.jpg';
import image1 from '../../../episodePaper.png';
import './EpisodeAtTop.css'
import {EpisodeAtTopType} from '../../../types';

function getSingleEpisode(id:string)
  { return gql`{
      episode(id:${id})
      { 
        id
        name
        air_date
        episode   
      }
    }
       `
  }

const EpisodeAtTop = ({id}:EpisodeAtTopType) => {
    const {loading,error,data}=useQuery(getSingleEpisode(id));
    if(loading) return <div className='loading'>Loading ...</div>
    if(error) return <div className='error'>Error ...</div>

    const episodePaper=parseInt(id)%2!==0 ? image1: image2;
    console.log(episodePaper);
    return (
        <div className='episodeAtTop' style={{backgroundImage:`url(${episodePaper})`}} >
            <h2>{data.episode.episode}</h2>
            <h1>{data.episode.name}</h1>
            <h3>Air Date: {data.episode.air_date}</h3>
        </div>
    )
}

export default EpisodeAtTop
