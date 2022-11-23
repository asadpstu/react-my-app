import { useState } from "react";
import { connect } from "react-redux";
import parent_child from "../../constants/parent_child.const";

const Child1Page = ({dispatch}) => {
    console.log("Child 1")
    const textChange=(e)=>{
      const {name,value} = e.target
      dispatch({
        "type" : parent_child.CHILD_ONE, 
        payload : {
            "component" : name,
            "value" : value
        }
      })
    }

    return (<div className="page" style={{border:"1px solid #CCC", marginTop:"10px",marginBottom:"10px"}}>
        <input className="form-control" name="child1" type="text" placeholder="Child 1" onChange={(e)=>{textChange(e)}}/>
    </div>);
}

const mapStateToPros = (state) =>{
    return {
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        dispatch
    }
}

export default connect(mapStateToPros,mapDispatchToProps)(Child1Page);