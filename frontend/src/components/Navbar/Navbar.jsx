import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {

  const [menu , setMenu] = useState("menu");
  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt="logo img" className="logo" /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu('Home')} className={menu ==='Home'?'active':''}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu('Menu')} className={menu ==='Menu'?'active':''}>Menu</a>
          <a href='#About' onClick={()=>setMenu('About')} className={menu ==='About'?'active':''}>About</a>
          <a href='#footer' onClick={()=>setMenu('Contact-Us')} className={menu ==='Contact-Us'?'active':''}>Contact-Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search icon" />
          <div className="navbar-search-icons">
            <Link to='/cart'><img src={assets.basket_icon} alt="basket icon" /></Link>
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar