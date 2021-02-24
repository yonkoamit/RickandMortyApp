import React, { useState } from 'react'
import EpisodeQuery from './EpisodeQuery/EpisodeQuery';
import './Episodes.css'



const Episodes = () => {
    const [episodeSearch,setEpisodeSearch]=useState('');
    const [page,setPage]=useState(1);

    function onClickHandler(val:number)
        {setPage(val);}

    return (
        <>
        <div className='episodes'>
            <div className='episodeSearch'>
                <h2>Episodes</h2>
                <input type='text' placeholder='Input Episode'
                    onChange={(e)=>{
                        setEpisodeSearch(e.target.value)
                        setPage(1);}}
                />
            </div>
            <EpisodeQuery episodeSearch={episodeSearch} onClickHandler={onClickHandler} page={page}/>
        </div>
        <hr/>
        </>
    )
}

export default Episodes
