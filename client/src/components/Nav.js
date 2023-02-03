import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
                okCreature
            </a>
            {/* when logged out */}
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                        Signup
                    </Link>
                </li>
            </div>
            
        </div>

    );
};

export default Nav;