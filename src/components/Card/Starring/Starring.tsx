import './Starring.css';
interface Iprops{
    image:string,
    name:string
}
function Starring({image,name}:Iprops){
    return (
        <div className='starring'>
            <img src={image}/>
            <h2>{name}</h2>
        </div>
    )
}

export default Starring
