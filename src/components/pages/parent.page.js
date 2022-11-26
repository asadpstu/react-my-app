import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Child1Page from "./child1.page";
import Child2Page from "./child2.page";
import Child3Page from "./child3.page";
import Child4Page from "./child4.page";
import parent_child from "../../constants/parent_child.const";
import axios from "axios";

import { connect } from "react-redux";

const ParentPage = ({ child1Name = '', child1Value = '', team = '', score = '', dispatch }) => {
    const [zero, setZero] = useState(null)

    const changeState = () => {
        setZero(Math.random())
    }
    useEffect(() => {
        console.log("Impact..")
        dispatch({
            type: parent_child.PARENT_TRIGGER_SCORE, payload: {
                new_score: score
            }
        })
    }, [score])

    useEffect(() => {
        if (team !== "") {
            dispatch({ type: parent_child.PARENT_TRIGGER_TEAM, payload: [] })
            setTimeout(() => {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        dispatch({ type: parent_child.PARENT_TRIGGER_TEAM, payload: response.data })
                    })
                    .catch(error => {
                        console.log("Can't pull data!")
                    })
            }, 1000);

        }
        else dispatch({ type: parent_child.PARENT_TRIGGER_TEAM, payload: [] })


    }, [team])

    return (<div className="page">


        <Row>
            <Col md={12} lg={12} sm={12}>
                <div style={{ border: '1px solid #DDD', marginTop: '10px' }}>
                    Child1Page :
                    {child1Value.length > 0 && <div>Element name : {child1Name}</div>}
                    {child1Value.length > 0 && <div>Element Value : {child1Value}</div>}
                </div>
                <div>
                    Child2Page : {team && <span>Team : {team}</span>}  {score && <span>Score : {score}</span>}
                </div>

                <button onClick={changeState}>Generate Random Number </button> <span>{zero}</span>
            </Col>
            <Col md={12} lg={6} sm={12}>
                <div style={{border:"1px solid PINK", marginTop:"10px"}}>
                    Child-1
                    <Child1Page />
                </div>

            </Col>
            <Col md={12} lg={6} sm={12}>
                <div style={{border:"1px solid PINK", marginTop:"10px"}}>
                    Child-2
                    <Child2Page />
                </div>

            </Col>
            <Col md={12} lg={6} sm={12}>
                <div style={{border:"1px solid PINK", marginTop:"10px"}}>
                    Child-3
                    <Child3Page />
                </div>

            </Col>
            <Col md={12} lg={6} sm={12}>
                <div style={{border:"1px solid PINK", marginTop:"10px"}}>
                    Child-4
                    <Child4Page random={zero} />
                </div>
            </Col>
        </Row>


    </div>);
}

const mapStateToPros = (state) => {
    return {
        child1Name: state.Child1Reducer.component,
        child1Value: state.Child1Reducer.value,
        team: state.Child2Reducer.team,
        score: state.Child2Reducer.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}




export default connect(mapStateToPros, mapDispatchToProps)(ParentPage);