import { useContext } from "react";
import { UserContext } from "../../../Context/User.context";
const Child3 = () => {
    const userList = useContext(UserContext)
    const worldCup = userList[0].worldCup

    return (
        <div>
            
            <hr/>
            {
               worldCup && worldCup.map(single=>{
                return (<div key={single.id}> Country : {single.countryName}  | Ranking : {single.ranking}  |  WorldCup : {single.worldCup} <hr/></div>)
               }) 
            }
        </div>
    )
}

export default Child3;