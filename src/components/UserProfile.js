import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserProfile() {

  const [id, setId] = useState('');
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem('id'))
    axios.get(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      setFname(res.data.data.first_name)
      setLname(res.data.data.last_name)
      setEmail(res.data.data.email)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [id])

  const onClick = data => {
    data.preventDefault()
    axios.patch(`https://reqres.in/api/users/${id}`, {
      firstName: data.fname,
      lastName: data.lname,
      email: data.email
    }).then((res) => {
      console.log(res.data)
      alert("Successfully Updated " + JSON.stringify(res.data))
      localStorage.removeItem('id')
      window.location.reload()
    })
  }

  return (
    <React.Fragment>
      <div className="container p-5">
        <Form onSubmit={onClick}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your First name" defaultValue={fname} onChange={(e) => setFname(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" defaultValue={lname} onChange={(e) => setLname(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
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
