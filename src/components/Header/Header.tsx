import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Link to='/' style={{color:'black'}}>
                Rick And Morty
            </Link>
            <hr/>
        </div>
    )
}

export default Header
