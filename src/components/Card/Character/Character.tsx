import React from 'react'
import './Character.css'
type CharacterType={
    characterItems:{
    __typename:string,
    id:string,
    name:string,
    species:string,
    gender:string,
    image:string}
}
function Character<Object extends CharacterType>(props:Object){
    
    const characterDetails=props.characterItems;
    return (
        <div className='character'>
            <img src={characterDetails.image} alt='Character Image'/>
            <span>Species: {characterDetails.species}</span>
            <h4>{characterDetails.name}</h4>
            <span>Gender: {characterDetails.gender}</span>
        </div>
    )
    
}

export default Character
