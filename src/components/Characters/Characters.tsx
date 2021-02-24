import React, { useState } from 'react'
import CharacterQuery from './CharacterQuery/CharacterQuery';

const Characters = () => {
    const [characterSearch,setCharacterSearch]=useState('');
    const [page,setPage]=useState(1);

    function onClickHandler(val:number)
        {setPage(val);}

    return (
        <div>
            <div className='episodePanel'>
                <h2>Characters</h2>
                <input type='text' placeholder='Input Character'
                    onChange={(e)=>{
                        setCharacterSearch(e.target.value)
                        setPage(1);}}
                />
            </div>
            <CharacterQuery characterSearch={characterSearch} onClickHandler={onClickHandler} page={page}/>
        </div>
    )
}

export default Characters
