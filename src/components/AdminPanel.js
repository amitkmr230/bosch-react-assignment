import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Body from './Body'

function AdminPanel() {
    return (
        <React.Fragment>
            <div className="row">                
                <div className="col-1">
                    <Navigation />
                </div>
                <div className="col-11">
                    <Header />
                    <Body />
                </div>
            </div>
            
            
        </React.Fragment>
    )
}

export default AdminPanel
