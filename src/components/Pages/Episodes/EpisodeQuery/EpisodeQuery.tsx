import React from 'react'
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Episode from '../../../Card/Episode/Episode';
import './EpisodeQuery.css';
import {EpisodeQueryprops,EpisodeType,EpisodeList} from '../../../../types';

function getEpisodes(a:number,b:string){
    return gql`
    query getEpisodes{
        episodes(page: ${a},filter:{name:"${b}"}){
            info{
                count
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
`
}

function EpisodeQuery({episodeSearch,onClickHandler,page}:EpisodeQueryprops) {

    const {loading,error,data}=useQuery(getEpisodes(page,episodeSearch));
    if(loading) return <div className='loading'>Loading ...</div>
    if(error) return <div className='error'>Oops! Not Found</div>
    const info=data.episodes.info;
    const episodeArray=data.episodes.results;
    const episodeList=episodeArray.map((val:EpisodeList)=>({
        id:val.id,
        name:val.name,
        air_date:val.air_date,
        episode:val.episode,
        char_count:val.characters.length
    }));
    let buttons=<div></div>;
    if(info.next && info.prev)
        {   buttons=<div className='movementButtons'>
                        <button onClick={()=>{
                            onClickHandler(page-1);
                        }}>prev</button>
                        <button onClick={()=>{
                            onClickHandler(page+1);
                        }}>next</button>
                    </div>
        }
    else if(info.next)
    {buttons=<div className='movementButtons'>
                <button onClick={()=>{
                    onClickHandler(page+1);
                }}>next</button>
            </div>}
    else if(info.prev)
    {
        buttons=<div className='movementButtons'>
                    <button onClick={()=>{
                        onClickHandler(page-1);
                        }}>prev</button>
                </div>
    }
    return (
        <div>
                <div className='episodeList'>
                    {
                        episodeList.map((val:EpisodeType)=>(
                            <Link to={`/episodes/${val.id}`} style={{textDecoration:'none',color:'black'}}>
                                <Episode key={val.id} episodeItems={val}/>
                            </Link>
                        ))
                    }
                </div>
            
            {buttons}
            <div className='pageNumber'>{page}/{info.pages}</div>   
        </div>
    )
}

export default EpisodeQuery
