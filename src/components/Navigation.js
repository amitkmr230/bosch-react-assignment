import React from 'react'

function Navigation() {
    return (
        <React.Fragment>
            <nav className="nav flex-column">
                <a className="nav-link active" href="#?"><i className="icon-home"></i></a>
                <a className="nav-link" href="#?"><i className="icon-leaf"></i></a>
                <a className="nav-link" href="#?"><i className="icon-eye-open"></i></a>
                <a className="nav-link" href="#?"><i className="fa fa-address-book-o"></i></a>
            </nav>
        </React.Fragment>
    )
}

export default Navigation
