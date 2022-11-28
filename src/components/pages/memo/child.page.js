import { memo } from "react";

const ReactMemoChild = ({data,handleChange}) => {
    console.log("Rendering Child Component..")
    const obj = {
        "country" : "Siberia",
        "population" : Math.random().toString().substring(3,9),
        "avgHeight" : Math.random().toString().substring(3,4)+"ft"
    }
    return (
        <div style={{backgroundColor:"GREEN",height:"100px",marginTop:"10px"}}>
            <div>Green Backgound Area is Child Component</div>
            <div>New Data = { data}</div>
            <button onClick={()=> {handleChange(obj)}}>Pass data to Parent</button>
        </div>
    )
}
export default memo(ReactMemoChild);