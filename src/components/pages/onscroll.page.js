import axios from "axios";
import { useEffect, useState } from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import { apiUrl } from "../../apiUrl";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Form, Modal, Button, } from "react-bootstrap";

const Infinite = () => {
    const [per_page, setPerPage] = useState(50)
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const [modalData, setModalData] = useState({})
    useEffect(() => {
        axios.get(`${apiUrl.coinApi}&per_page=${per_page}&page=${page}`).then(response => {
            setData(response.data)
        }).catch(error => { console.log("Can't load data..") })

    }, [])

    const fetchMoreData = () => {
        setPage(page + 1)
        axios.get(`${apiUrl.coinApi}&per_page=${per_page}&page=${page}`).then(response => {
            let temp = []
            temp.push(...data, ...response.data)
            setData(temp)
        }).catch(error => { console.log("Can't load data..") })
    };

    const getDetails = (data) => {
        setShow(!show)
        let temp = {}
        temp = { ...temp, ...data }
        setModalData(temp)
    }

    const handleClose = () => {
        setShow(!show)

    }



    return (<div>


        <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={true} loader={<h4>Loading...</h4>} >
            <Row>
                {
                    data && data.map(single => {
                        return (
                            <Col lg={3} sm={12} md={6}>
                                <div
                                    style={{ padding: "0px", background: "rgba(249, 191, 221, 0.3)", marginTop: "15px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px", cursor: "pointer" }}
                                    onClick={() => { getDetails(single) }}
                                >
                                    <div style={{ "text-transform": "Uppercase", textAlign: "left", fontSize: "15px", paddingLeft: "15px", paddingTop: "5px" }}>
                                        {single.id.length > 10 ? single.id.substring(0, 5) + "..." + single.id.substring(single.id.length - 3) : single.id}
                                    </div>
                                    <div style={{ textAlign: "center", paddingLeft: "15px", marginBottom: "10px", marginTop: "10px" }}><img height={100} src={single.image} alt="No Picture" style={{ borderRadius: "5px" }} /></div>
                                    <div style={{ backgroundColor: "rgba(249, 191, 221, 0.9)", textAlign: "left", paddingLeft: "15px" }}><FontAwesomeIcon icon={faStore} />&nbsp;{single.total_volume}</div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </InfiniteScroll>

        <Modal show={show} onHide={handleClose} >
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>Crypto ID</InputGroup.Text>
                            <Form.Control
                                placeholder="Crypto Id"
                                aria-label="Crypto Id"
                                aria-describedby="basic-addon1"
                                defaultValue={modalData.id}
                            />
                        </InputGroup>


                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>Current price</InputGroup.Text>
                            <Form.Control
                                placeholder="Current price"
                                aria-label="current_price"
                                aria-describedby="basic-addon1"
                                defaultValue={modalData.current_price}
                            />
                        </InputGroup>


                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>Market cap rank</InputGroup.Text>
                            <Form.Control
                                placeholder="market_cap_rank"
                                aria-label="market_cap_rank"
                                aria-describedby="basic-addon1"
                                defaultValue={modalData.market_cap_rank}
                            />
                        </InputGroup>


                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>image</InputGroup.Text>
                            <div>
                                <img src={modalData.image} />
                            </div>
                        </InputGroup>


                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>Total supply</InputGroup.Text>
                            <Form.Control
                                placeholder="total_supply"
                                aria-label="total_supply"
                                aria-describedby="basic-addon1"
                                defaultValue={modalData.total_supply}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>Max supply</InputGroup.Text>
                            <Form.Control
                                placeholder="Max supply"
                                aria-label="max_supply"
                                aria-describedby="basic-addon1"
                                defaultValue={modalData.max_supply}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>Atl date</InputGroup.Text>
                            <Form.Control
                                placeholder="Atl date"
                                aria-label="atl_date"
                                aria-describedby="basic-addon1"
                                defaultValue={new Date(modalData.atl_date).toDateString()}
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{ width: "130px" }}>Last updated</InputGroup.Text>
                            <Form.Control
                                placeholder="last_updated"
                                aria-label="last_updated"
                                aria-describedby="basic-addon1"
                                defaultValue={new Date(modalData.last_updated).toDateString()}
                            />
                        </InputGroup>


                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>


    </div>)
}

export default Infinite