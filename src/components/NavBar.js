import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <span onClick={() => window.location.replace("/#home")} className="active">Home</span>
            <span onClick={() => window.location.replace("/#projects")}>Projects</span>
            <span onClick={() => window.location.replace("/#about")}>About</span>
            <span onClick={() => window.location.replace("/#contact")}>Contact</span>
        </nav>
    );
};

export default NavBar;