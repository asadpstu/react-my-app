import { useState } from "react";
import { connect } from "react-redux";
import parent_child from "../../constants/parent_child.const";


const Child2Page = ({dispatch}) => {
    console.log("Child 2")
    const [teamScore, setTeamScore] = useState({team : "", score : ""})
    const teamScoreFunc = (e) =>{
       const {name,value} = e.target;
       let temp = teamScore
       temp[name] = value
       let setScore = {...teamScore, ...temp}
       setTeamScore(setScore)
       dispatch({type: parent_child.CHILD_TWO, payload : teamScore})
    }
    return (<div className="page" style={{ marginTop:"10px",marginBottom:"10px"}}>
        {/* <input name="team" type="text" placeholder="Child 2 Team"/> */}
        <select className="form-control" name="team" onChange={(e)=>{teamScoreFunc(e)}}  style={{marginBottom:"5px"}}>
            <option>BAN</option>
            <option>IND</option>
            <option>MAL</option>
            <option>JPN</option>
        </select>
        <input className="form-control" name="score" type="number" placeholder="Child 2 Score" onChange={(e)=>{teamScoreFunc(e)}}/>
    </div>);
}

export default connect(null,null)(Child2Page);