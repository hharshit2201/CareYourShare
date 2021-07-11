import React, { useState } from 'react';
import {Link} from'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { MenuItems } from './MenuItems';
import './NavBar.css';
import { IconContext} from 'react-icons';
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const toggleNavbar = () => setNavbar(!navbar);
   
    return(
        <>
        <IconContext.Provider value={{color:'#FFFFFF'}}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={toggleNavbar}/>
                </Link>
            </div>
            <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                <ul  className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaHamburger onClick={toggleNavbar}/>
                        </Link>
                    </li>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                {/* TODO: Highlight the selected menu in navbar*/}
                                
                                <NavLink exact to={item.path} activeClassName="nav-menu-active">
                                   {item.icon}
                                   <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        </IconContext.Provider>
        </>
    );
}

export default NavBar;