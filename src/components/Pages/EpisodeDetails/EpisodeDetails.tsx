import React from 'react'
import { useParams } from 'react-router'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Starring from '../../Card/Starring/Starring';
import './EpisodeDetails.css'
import EpisodeAtTop from '../../Card/EpisodeAtTop/EpisodeAtTop';
import {Link} from 'react-router-dom';
import {starringListType} from '../../../types';
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

function EpisodeDetails() {
    const {id}=useParams<{id:string}>();

    const {loading,error,data}=useQuery(getEpisode(id))
    if(loading) return <div className='loading'>Loading ...</div>
    if(error) return <div className='error'>Oops! Not Found</div>
    const starringList=data.episode.characters;
    console.log(starringList);
    return (
        <>
        <div className="episodeDetails">
            <EpisodeAtTop id={id}/>
            <h1>Starring</h1>
            <div className='starringList'>
                {starringList.map((val:starringListType)=>(
                    <Link to={`/characters/${val.id}`} key={val.id} style={{textDecoration:'none',color:'black'}}>
                        <Starring image={val.image} name={val.name}/>
                    </Link>
                ))}
            </div>
        </div>
        <hr/>
        </>
    )
}

export default EpisodeDetails
