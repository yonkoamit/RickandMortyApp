import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Character from '../../../Card/Character/Character';
import {Link} from 'react-router-dom';
import {CharacterType,CharacterQueryProps} from '../../../../types';

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



function CharacterQuery({characterSearch,onClickHandler,page}:CharacterQueryProps) {
    
    const {loading,error,data}=useQuery(getCharacters(page,characterSearch))
    if(loading) return <div className='loading'>Loading ...</div>
    if(error) return <div className='error'>Oops! Not Found</div>
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
                        <Link to={`/characters/${val.id}`} key={val.id} style={{textDecoration:'none',color:'black'}}>
                            <Character key={val.id} characterItems={val}/>
                        </Link>
                    ))
                }
            </div>
            
            {buttons}
            <div className='pageNumber'>{page}/{info.pages}</div>
            
        </div>
    )
}

export default CharacterQuery
