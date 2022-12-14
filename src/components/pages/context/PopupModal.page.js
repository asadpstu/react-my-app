import { Form, Modal, Button, } from "react-bootstrap";
const PopupModal = ({state,onHide,data, submitData,onTextChange}) =>{
    return (
        <Modal show={state} onHide={onHide}>
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
                                defaultValue={data.email}
                                onChange={(e) => { onTextChange(e) }}
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Personal Details</Form.Label>
                            <Form.Control 
                              as="textarea" 
                              rows={3}  
                              name="details" 
                              defaultValue={data.details}
                              onChange={(e) => { onTextChange(e) }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={(e) => { submitData(e) }}>
                        Pass data to Parent
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}

export default PopupModal;