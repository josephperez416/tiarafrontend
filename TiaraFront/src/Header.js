import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-menu">
                <div className="logo"> Mi Tiara</div>  
                <div className="auth-buttons">
                    <button>Login / Sign Up</button>
                    <button>List Your Business</button>
                </div>           
            </div>
            <div className = "header-main">
                <div className = "search-bar">
                    <input type = "text" placeholder = "What are you looking for?" />
                    <input type = "text" placeholder = "Where?" />
                    <input type = "text" placeholder = "00/00/0000" />
                    <button className = "search-button">Search</button>
                </div>
            
                <div className = "categories">
                    <button>Venue</button>
                    <button>Entertainment</button>
                    <button>Catering</button>
                    <button>Decorations</button>
                    <button>Photo and Video</button>
                </div>  
            </div>         
        </header>
    );
};

export default Header;