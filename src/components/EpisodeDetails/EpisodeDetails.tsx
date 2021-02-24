import React from 'react'
import { useParams } from 'react-router'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Starring from '../Card/Starring/Starring';
import './EpisodeDetails.css'
import EpisodeAtTop from '../Card/EpisodeAtTop/EpisodeAtTop';
import {Link} from 'react-router-dom';
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
type starringListType={
    __typename:string,
    id:string,
    name:string,
    image:string
}
function EpisodeDetails() {
    const {id}=useParams<{id:string}>();

    const {loading,error,data}=useQuery(getEpisode(id))
    if(loading) return <div>Loading ...</div>
    if(error) return <div>Oops! Not Found</div>
    const starringList=data.episode.characters;
    console.log(starringList);
    return (
        <div>
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
    )
}

export default EpisodeDetails
