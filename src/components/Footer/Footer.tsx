
import React from 'react'
import Logo from './logo.png';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-items'> </div>
            <div className='footer-items'>
                <img src={Logo} alt='rick and morty logo'/>
            </div>
            <div className='footer-items'>
                Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. 
            </div>
            <div className='footer-items'> </div>
        </div>
    )
}

export default Footer
