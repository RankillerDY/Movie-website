import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (

    <div className='Heading'>
        <nav >
        <Link to={`/`}><img src='https://myflixer.to/images/group_1/theme_7/logo.png?v=0.1' className='header_img'></img></Link>
            <ul className='Navigation'>
                <li><a href="#">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <h5>Find Movies, TV shows and more</h5>
    </div>
  )
}
