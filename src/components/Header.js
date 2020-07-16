import React from 'react';
import logo from './images/logo.png'

function Header() {
    return (
        <React.Fragment>            
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
                    
                </a>
                <div>
                    User Name
                </div>
            </nav>
            
        </React.Fragment>
    )
}

export default Header
