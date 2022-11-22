import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { apiUrl } from "../../apiUrl";
import axios from "axios";
const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        axios.get(apiUrl.userslist).then(response => {
            setIsLoading(true)
            setTimeout(() => {
              setUsers(response.data)  
              setIsLoading(false)
            }, 200);
            
        }).catch(error => { console.log("Can't fetch data") });
    }, [])

    return (
        <div style={{marginTop:'16px'}}>
            <div>
                <h5>User List (useState Functionality)</h5>
                <hr/>
            </div>
            {isLoading ? <div className="loading">
                Loading...
            </div> : ''}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((value,index)=>{
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{value.name}</td>
                            <td>{value.username}</td>
                            <td>{value.email}</td>
                            <td>
                                <tr>
                                    <td colSpan={4}>{value.address.street}</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>{value.address.suite}</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>{value.address.city}</td>
                                </tr>
                            </td>
                            <td>{value.phone}</td>
                            <td>{value.website}</td>
                            <td>
                                <tr>
                                    <td colSpan={4}>{value.company.name}</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>{value.company.catchPhrase}</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>{value.company.bs}</td>
                                </tr>                                
                            </td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>

    );
}

export default Users;