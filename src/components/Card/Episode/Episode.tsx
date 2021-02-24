import React from 'react'
import image1 from '../../../dumbEasier.jpg';
import image2 from '../../../episodePaper.png';

import './Episode.css';
type EpisodeType={
    episodeItems:
    {id:string,
    name:string,
    air_date:string ,
    episode:string ,
    char_count:number}
}
function Episode<Object extends EpisodeType>(props:Object){
    const episodeDetails=props.episodeItems;
    const episodeImage:string=(parseInt(episodeDetails.id)%2===0)? image1: image2;

    return (
        <div className='episode'>
            <img src={episodeImage} alt='Episode Image'/>
            <span>{episodeDetails.episode}</span>
            <h4>{episodeDetails.name}</h4>
            <span>Air Date: {episodeDetails.air_date}</span>
            <span>Characters: {episodeDetails.char_count}</span>
        </div>
    )
}

export default Episode
