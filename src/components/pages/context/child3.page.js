import { useContext, useEffect, useState } from "react";
import { Form, Modal, Button, } from "react-bootstrap";
import { UserContext } from "../../../Context/User.context";
import actionTypes from "../../../constants/actionTypes.const";
import { connect } from "react-redux";
import PopupModal from "./PopupModal.page";

const Child3 = ({ dispatch }) => {
    const [data, setData] = useState({})
    const [show, setShow] = useState(false);


    const userList = useContext(UserContext)
    const worldCup = userList[0].worldCup

    
    const openModal = () => {
        setShow(true)
        let obj = {
            "email": Math.random().toString().substring(3, 10) + "@gmail.com",
            "details": "I will introduce react and typescript together. I will show how to set up the environment for react-typescript."
        }
        setData(obj)

    }

   

    const onHide = () =>{
        setShow(!show)
    }

    const handleClose = () => {
        setShow(!show)
    }

    const onTextChange = (e) => {
        let { name, value } = e.target;
        let temp = {}
        temp[name] = value
        setData({ ...data, ...temp })
    }

    const submitData = (event) => {
        console.log(data)
        dispatch({ type: actionTypes.POPUP_MODAL, payload: data })
        setShow(!show)
    }






    return (
        <div>

            <hr />
            {
                worldCup && worldCup.map(single => {
                    return (<div key={single.id}> Country : {single.countryName}  | Ranking : {single.ranking}  |  WorldCup : {single.worldCup} <hr /></div>)
                })
            }

            <button onClick={() => { openModal() }}>
                Click to Open Popup Modal
            </button>

            <PopupModal state={show} onHide={onHide} data={data} submitData={submitData} onTextChange={onTextChange}/>



        </div>
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(null, mapDispatchtoProps)(Child3);
