import React, {useState} from 'react'; 
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserProfile(props) {

  const [id, setId] = useState(props.id);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const onClick = data => {
    data.preventDefault()
    axios.patch(`https://reqres.in/api/users/${id}`, {
      firstName: data.fname,
      lastName: data.lname,
      email: data.email
    }).then((res) => {
      console.log(res.data)
      alert(`Successfully Updated at - + ${JSON.stringify(res.data.updatedAt)}
       id - ${props.id}
       First Name - ${fname}
       Last Name - ${lname}
       Email - ${email}`)
      window.location.reload()
    })
  }

  return (
    <React.Fragment>
      <div className="container p-5">
        <Form onSubmit={onClick}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your First name" defaultValue={props.fname} onChange={(e) => setFname(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" defaultValue={props.lname} onChange={(e) => setLname(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" defaultValue={props.email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Button className="btn-block" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </React.Fragment>
  )
}

export default UserProfile
