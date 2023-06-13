import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (

            <div className="allLinks">
                <div className="linkss">
                <Link to="/" className='link'>Home</Link>
                </div>
                <div className="linkss">
                <Link to="/skills" className='link'>Skills</Link>
                </div>
                <div className="linkss">
                <Link to="/projects" className='link'>Projects</Link>
                </div>
                <div className="linkss">
                <Link to="/contact" className='link'>Contacts</Link>
                </div>
                <div className="linkss">
                <Link to="/about" className='link'>About</Link>
                </div>
            </div>
    );
};

export default Header;