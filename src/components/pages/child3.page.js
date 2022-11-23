import { useState } from "react";
import { connect } from "react-redux";

const Child3Page = ({component='',value='',team='',score=''}) => {
    console.log("Child 3")
    return (<div className="page" style={{border:"1px solid blue", marginTop:"10px",marginBottom:"10px"}}>
        Receiving data from Child to Child
        <hr/>
        {component} <br/> {value} <br/> {team} <br/> {score}
    </div>);
}


const mapStateToPros =(state) =>{
    return {
        component : state.Child1Reducer.component,
        value : state.Child1Reducer.value,
        team : state.Child2Reducer.team,
        score : state.Child2Reducer.score 
    }
}
export default connect(mapStateToPros,null)(Child3Page);