import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Character from '../../Card/Character/Character';

type Iprops={
    characterSearch:string,
    onClickHandler(val:number):void,
    page:number
}
type CharacterType={
    __typename:string,
    id:string,
    name:string,
    species:string,
    gender:string,
    image:string
}
function getCharacters(a:number,b:string){
    return gql`
    query getCharacters{
        characters(page: ${a},filter:{name:"${b}"}){
            info{
                pages
                next
                prev
            }
            results{
                id
                name
                gender
                image
                species
            }
          }
        }
`
}



function CharacterQuery({characterSearch,onClickHandler,page}:Iprops) {
    
    const {loading,error,data}=useQuery(getCharacters(page,characterSearch))
    if(loading) return <div>Loading ...</div>
    if(error) return <div>Oops! Not Found</div>
    const info=data.characters.info;
    const charactersList=data.characters.results;
    

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
                    charactersList.map((val:CharacterType)=>(
                        <Character key={val.id} characterItems={val}/>
                    ))
                }
            </div>
            
            {buttons}
            <div className='pageNumber'>{page}/{info.pages}</div>
            
        </div>
    )
}

export default CharacterQuery
