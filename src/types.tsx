import React from 'react';
type SingleCharacterType={
    characterItems:{
    __typename:string,
    id:string,
    name:string,
    species:string,
    gender:string,
    image:string}
}

type CharacterType={
    __typename:string,
    id:string,
    name:string,
    species:string,
    gender:string,
    image:string
}
type CharacterQueryProps={
    characterSearch:string,
    onClickHandler(val:number):void,
    page:number
}



type SingleEpisodeType={
    episodeItems:
    {id:string,
    name:string,
    air_date:string ,
    episode:string ,
    char_count:number}
}

type EpisodeAtTopType={
    id:string
}

type EpisodeQueryprops={
    episodeSearch:string,
    onClickHandler(val:number):void,
    page:number
}

type EpisodeType={
    id:string,
    name:string,
    air_date:string ,
    episode:string ,
    char_count:number
}


type EpisodeList={
    __typename:string,
    id:string,
    name:string,
    air_date:string,
    episode:string,
    characters:{id:string,__typename:string}[]
}

type StarringpropsType={
    image:string,
    name:string
}

type starringListType={
    __typename:string,
    id:string,
    name:string,
    image:string
}


export type {SingleCharacterType,CharacterType,
    CharacterQueryProps,SingleEpisodeType,
    EpisodeAtTopType,EpisodeQueryprops,EpisodeType,EpisodeList,
    StarringpropsType,starringListType};