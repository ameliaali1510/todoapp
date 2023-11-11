import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import React from 'react';


const Navbar = () => {
    return (
        <div id='navbar'>
            <header>
                <div>
                    <Link to='/' className='nav-link'>
                        <span className='nav-text'>Add Item </span>
                    </Link>

                    <Link to='/add-todo' className='nav-link'>
                        <span className='nav-text'>My List</span>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Navbar;



