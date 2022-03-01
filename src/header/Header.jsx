import React from 'react'
import "./header.css"
import logo from "../images/logo.png"
const Header = () => {
    return (
        <nav>
            <a className='logo'>
                <img src={logo}></img>
            </a>
            <ul className='menu'>
                <li><a >Home</a></li>
                <li><a >Movies</a></li>
                <li><a >TV Shows</a></li>
                <li><a >Hollywood</a></li>
                <li><a >Horor</a></li>
                <li><a>Contact</a></li>
            </ul>
            <div className='search'>
                <input type="search" placeholder='Find Your Favorite Movies' />
            </div>
        </nav>
    )
}

export default Header