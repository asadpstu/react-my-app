import { useCallback, useState } from "react"
import ReactMemoChild from "./child.page"

const ReactMemo = () => {
    console.log("React Memo Parent Page")
    let [count, setCount] = useState(0)
    let [props, setProps] = useState(0)
    let [bioinfo, setBioInfo] = useState({})
    const countInc = (event) => {
        count = count + 1
        setCount(count)
        alert("Optimization :: Child Component will not render. Only Parent component will render.")
    }

    const passProps = () => {
        setProps(Math.random())
    }

    const bioInfoFunc = useCallback((obj) => {
        alert("Passing data from child to parent. Child Component will not render(Optimization useCallback)")
        setBioInfo({ ...bioinfo, ...obj })
    },[props]) 

    return (
        <div style={{marginTop: "10px"}}>

            <button onClick={(e) => { countInc(e) }}>Increment</button>
            <span style={{ marginLeft: "10px" }}>Total Clicked : {count}</span>
            {bioinfo.country && <>
                <div>Country : {bioinfo.country}</div>
                <div>Population : {bioinfo.population}</div>
                <div>Avg. Height : {bioinfo.avgHeight}</div>
            </>
            }

            <div style={{marginTop:"10px"}}>
                <button onClick={(e) => { passProps(e) }}>Pass data to Child as props</button>
            </div>

            <ReactMemoChild data={props} handleChange={bioInfoFunc} />
        </div>
    )
}

export default ReactMemo