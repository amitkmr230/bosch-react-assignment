import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper'; 
import axios from 'axios';  

function UserList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1').then(response => {                  
                setList(response.data.data)              
        }).catch(err => {
            console.log(err)
        });  
    }, [])

    const handleClick = id => {
      console.log(id)
      localStorage.setItem("id", id)
      window.location.reload()
    }

    return (
        <React.Fragment>
            <TableContainer component={Paper}>  
        <Table stickyHeader aria-label="sticky table">  
          <TableHead>  
            <TableRow>  
              <TableCell>Id</TableCell>  
              <TableCell align="center">First Name</TableCell>  
              <TableCell align="center">Last Name</TableCell>  
              <TableCell align="center">Email</TableCell>  
              <TableCell align="center">Profile Image</TableCell>  
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {  
              list.map((p, index) => {  
                return <TableRow hover key={index} onClick={() => handleClick(p.id)}>  
                  <TableCell component="th" scope="row">  
                    {p.id}  
                  </TableCell>  
                  <TableCell align="center">{p.first_name}</TableCell>  
                  <TableCell align="center">{p.last_name}</TableCell>  
                  <TableCell align="center">{p.email}</TableCell>  
                  <TableCell align="center"><img className="avatar" src={p.avatar} alt=""></img></TableCell>  
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
      </TableContainer>
        </React.Fragment>
    )
}

export default UserList
