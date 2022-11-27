import { useContext } from "react";
import { UserContext } from "../../../Context/User.context";
import Child3 from "./child3.page";

const Child2 = () => {
    const context = useContext(UserContext)
    const countryList = context[0].countryList
    return (

        <div>

            <hr />
            {
                countryList && countryList.map(single => {
                    return (<div key={single.id}> Country : {single.countryName}  | Infected : {single.Infected}  | Death : {single.death} <hr /></div>)
                })
            }
            <b>Child3 is showing inside Child2 Page</b>
            <Child3 />
        </div>
    )
}


export default Child2;