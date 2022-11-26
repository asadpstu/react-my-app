import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../apiUrl";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Pagination = () => {
    const [coins, setCoins] = useState([])
    const [per_page, setPerPage] = useState(20)
    const [page, setPage] = useState(1)
    const total = 300
    const [btn, setButton] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${apiUrl.coinApi}&per_page=${per_page}&page=${page}`).then(response => {
            setCoins(response.data)
            generateButton(Math.ceil(total / per_page))
            setIsLoading(false)
        }).catch(error => { console.log("Can't load data..") })

    }, [])

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${apiUrl.coinApi}&per_page=${per_page}&page=${page}`).then(response => {
            setCoins(response.data)
            generateButton(Math.ceil(total / per_page))
            setIsLoading(false)
        }).catch(error => { console.log("Can't load data..") })

    }, [page])

    useEffect(() => {
        setIsLoading(true)
        setPage(1)
        axios.get(`${apiUrl.coinApi}&per_page=${per_page}&page=${page}`).then(response => {
            setCoins(response.data)
            generateButton(Math.ceil(total / per_page))
            setIsLoading(false)
        }).catch(error => { console.log("Can't load data..") })

    }, [per_page])

    const generateButton = (buttonCount) => {
        let tempItem = []
        for (let i = 1; i <= buttonCount; i++) {
            tempItem.push(i)
        }
        setButton(tempItem)
    }

    const hitPage = (currentPage) => {
        setPage(currentPage)
    }

    const setPerpageRecord = (e) => {
        setPerPage(e.target.value)
    }

    return (<div className="page">

        {
            isLoading && (
                <div className="loading">Loading...</div>
            )
        }

        <Row style={{ marginTop: "5px" }}>
            {
                coins.length > 0 && coins.map(single => {
                    return (
                        <Col lg={2} md={4} sm={6} >
                            <div style={{ padding: "0px", background: "rgba(249, 191, 221, 0.3)", marginTop: "15px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}>
                                <div style={{ "text-transform": "Uppercase", textAlign: "left", fontSize: "15px", paddingLeft: "15px", paddingTop: "5px" }}>
                                    {single.id.length > 10 ? single.id.substring(0, 5) + "..." + single.id.substring(single.id.length - 3) : single.id}
                                    <span style={{ float: "right", cursor: "pointer", paddingRight: "10px" }}><FontAwesomeIcon icon={faShoppingCart} color="red" size="1x" /></span>
                                </div>
                                <div style={{ textAlign: "left", paddingLeft: "15px", marginBottom: "10px", marginTop: "10px" }}><img height={100} src={single.image} alt="No Picture" style={{ borderRadius: "5px" }} /></div>
                                <div style={{ backgroundColor: "rgba(249, 191, 221, 0.9)", textAlign: "left", paddingLeft: "15px" }}><FontAwesomeIcon icon={faStore} />&nbsp;{single.total_volume}</div>
                            </div>

                        </Col>
                    )

                })
            }
        </Row>
        <Row >
            <Col lg={2} md={1} sm={12}>
                <div style={{ marginTop: "25px", textAlign: "left" }}>
                    <span><b>Records Per Page</b></span>
                    <select style={{ marginTop: "5px", textAlign: "center" }} onChange={(e) => { setPerpageRecord(e) }}>
                        <option>{per_page}</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
            </Col>
            <Col lg={10} md={11} sm={12}>
                <div style={{ marginTop: "25px", textAlign: "center" }}>
                    {
                        btn.length > 0 && btn.map(single => {
                            return (<button className={single === page ? "paginationButton active" : 'paginationButton'} onClick={() => { hitPage(single) }}>{single}</button>)
                        })
                    }
                </div>
            </Col>

        </Row>
    </div>)
}
export default Pagination;