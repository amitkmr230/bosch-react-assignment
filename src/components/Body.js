import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserList from './UserList';
import UserProfile from './UserProfile';

function Body(props) {
    const [idno, setIdno] = useState()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    
    const getData = (id) => {
        console.log(id)
        setIdno(id.id)
        setFirstName(id.firstName)
        setLastName(id.lastName)
        setEmail(id.email)
        alert("You can view/edit user's profile in user profile tab.")
    }

    return (
        
        <React.Fragment>
            <div className="container mt-3">
                <h4>Page Title</h4>
                <div className="container mt-4 box">
                <Tabs defaultActiveKey={(idno === undefined) ? "user's list" : "user profile" } id="uncontrolled-tab-example">
                    <Tab eventKey="user's list" title="User's List" >
                        <UserList sendData={getData} />
                    </Tab>
                    <Tab eventKey="user profile" title="User Profile" disabled={idno ? false : true} >
                        <UserProfile id={idno} fname={firstName} lname={lastName} email={email} />
                    </Tab>
                </Tabs>
                </div>                
            </div>
        </React.Fragment>
    )
}

export default Body
