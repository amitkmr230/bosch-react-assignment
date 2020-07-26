import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserList from './UserList';
import UserProfile from './UserProfile';

function Body() {

    return (
        <React.Fragment>
            <div className="container mt-3">
                <h4>Page Title</h4>
                <div className="container mt-4 box">
                <Tabs defaultActiveKey={localStorage.getItem('id') ? "user profile" : "user's list"} id="uncontrolled-tab-example">
                    <Tab eventKey="user's list" title="User's List" >
                        <UserList />
                    </Tab>
                    <Tab eventKey="user profile" title="User Profile" disabled={false || localStorage.getItem('id') ? false : true}>
                        <UserProfile />
                    </Tab>
                </Tabs>
                </div>                
            </div>
        </React.Fragment>
    )
}

export default Body
