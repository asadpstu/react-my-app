import Table from 'react-bootstrap/Table';
const Child2 = (data) => {
    const users = data.data
    return (
        <div>
            {
                users.length > 1 &&
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
                        {users && users.map((value, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>
                                    <div style={{ borderBottom: "1px solid #CCC" }}>{value.address.street}</div>
                                    <div style={{ borderBottom: "1px solid #CCC" }}>{value.address.suite}</div>
                                    <div style={{ borderBottom: "1px solid #CCC" }}>{value.address.city}</div>
                                </td>
                                <td>{value.phone}</td>
                                <td>{value.website}</td>
                                <td>
                                    <div style={{ borderBottom: "1px solid #CCC" }}>{value.company.name}</div>
                                    <div style={{ borderBottom: "1px solid #CCC" }}>{value.company.catchPhrase}</div>
                                    <div style={{ borderBottom: "1px solid #CCC" }}>{value.company.bs}</div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Child2;