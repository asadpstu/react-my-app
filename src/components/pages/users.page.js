import React, { useState, useEffect, Suspense } from "react";
import Table from 'react-bootstrap/Table';
import { apiUrl } from "../../apiUrl";
import axios from "axios";


const Child1Lazy = React.lazy(() => import('./user-page-child/child1.page'))
const Child2Lazy = React.lazy(() => import('./user-page-child/child1.page'))

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(apiUrl.userslist).then(response => {
            setTimeout(() => {
                console.log(response.data)
                setUsers(response.data)
            }, 200);

        }).catch(error => { console.log("Can't fetch data") });
    }, [])

    return (
        <div style={{ marginTop: '16px' }}>
            {<Suspense fallback={<div>Loading data ..............</div>}>
                {<Child1Lazy data={users} />}
            </Suspense>}


            {<Suspense fallback={<div>Loading data ..............</div>}>
                <Child2Lazy data={users} />
            </Suspense>}

        </div>

    );
}

export default Users;