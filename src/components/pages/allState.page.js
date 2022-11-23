import { useSelector } from "react-redux";

const AllState = () => {
    const allState = useSelector((state) => state)
    const { userReducer, Child2Reducer } = allState
    console.log(allState)
    return (<div>
        <div style={{ borderBottom: '2px solid GREEN', marginBottom: '5px' }}>User Information</div>
        <div>Name : {userReducer.name}</div>
        <div>User Name : {userReducer.userName}</div>
        <div>Email Name : {userReducer.email}</div>
        <div>Person Gender : {userReducer.gender}</div>
        <div>Permissions : {userReducer.permissions.length > 0 &&
            userReducer.permissions.map(single => {
                return <span style={{ margin: '5px', padding: '5px', borderBottom: '5px solid YELLOW' }}>{single}</span>
            })
        }</div>

        <div style={{ borderBottom: '2px solid BLUE', marginBottom: '5px' }}>Score</div>
        <div>Team : {Child2Reducer.team !== "" ? Child2Reducer.team : '--'}</div>
        <div>Score : {Child2Reducer.score !== "" ? Child2Reducer.score : '--'}</div>


    </div>)
}

export default AllState;