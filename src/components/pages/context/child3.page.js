import { useContext, useEffect, useState } from "react";
import { Form, Modal, Button, } from "react-bootstrap";
import { UserContext } from "../../../Context/User.context";
import actionTypes from "../../../constants/actionTypes.const";
import { connect } from "react-redux";

const Child3 = ({ dispatch }) => {
    const [tempObj, setTempObj] = useState({})
    const [show, setShow] = useState(false);

    const userList = useContext(UserContext)
    const worldCup = userList[0].worldCup

    const openModal = () => {
        setShow(true)
        let obj = {
            "email": Math.random().toString().substring(3, 10) + "@gmail.com",
            "details": "I will introduce react and typescript together. I will show how to set up the environment for react-typescript."
        }
        setTempObj(obj)

    }

    const handleClose = () => {
        setShow(!show)
    }

    const onTextChange = (e) => {
        let { name, value } = e.target;
        let temp = {}
        temp[name] = value
        setTempObj({ ...tempObj, ...temp })
    }

    const passData = () => {
        dispatch({ type: actionTypes.POPUP_MODAL, payload: tempObj })
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                defaultValue={tempObj.email}
                                onChange={(e) => { onTextChange(e) }}
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Personal Details</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={tempObj.details} onChange={(e) => { onTextChange(e) }} name="details" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={() => { passData() }}>
                        Pass data to Parent
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(null, mapDispatchtoProps)(Child3);
