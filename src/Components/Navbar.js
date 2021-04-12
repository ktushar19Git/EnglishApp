import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div class='navbar'>
                <Link to="#" class='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul class='nav-menu-items'>
                    <li class="navbar-toggle">
                        <Link to="#" class='menu-bars'>
                            <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
