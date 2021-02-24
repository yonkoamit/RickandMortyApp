import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useParams } from 'react-router';
import './CharacterDetails.css'
function getCharacter(id:string)
{
    return gql`
    {
        character(id:${id})
        {   id
            name
            gender
            image
            species
            status
            origin{
              name
              dimension
              type
            }
        }
    }
    `
}
function CharacterDetails() {

    const {id}=useParams<{id:string}>();
    const {loading,error,data}=useQuery(getCharacter(id));
    if(loading) return <div className='loading'>Loading</div>;
    if(error) return <div className='error'>Oops! Some Error Occured</div>
    return (
        <>
        <h1 className='characterHeading'>{data.character.name}</h1>
        <div className='characterDetails'>
            <img src={data.character.image}/>
            <div>
                <h4>Gender</h4>
                <h5>{data.character.gender}</h5>
                <hr/>
            </div>
            <div>
                <h4>Origin</h4>
                <h5>{data.character.origin.dimension}</h5>
                <h5>Type: {data.character.origin.type}</h5>
                <h5>Name: {data.character.origin.name}</h5>
                <hr/>
            </div>
            <div>
                <h4>Species</h4>
                <h5>{data.character.species}</h5>
                <hr/>
            </div>
            <div>
                <h4>Status</h4>
                <h5>{data.character.status}</h5>
            </div>
        </div>
        <hr/>
        </>
    )
}

export default CharacterDetails
