import Child1 from "./child1.page";
import React from "react";
import { UserContext } from "../../../Context/User.context";

const Parent = () => {
    const object = []
    const CountryList = [
        { id: 1, "countryName": "Bangladesh", "Infected": 100, "death": 3 },
        { id: 2, "countryName": "India", "Infected": 107, "death": 4 },
        { id: 3, "countryName": "Pakistan", "Infected": 120, "death": 5 },
        { id: 4, "countryName": "Sri lanka", "Infected": 180, "death": 6 },
    ]
    const worldCups = [
        { id: 1, "countryName": "Bangladesh", "ranking": 100, "worldCup": 3 },
        { id: 2, "countryName": "India", "ranking": 107, "worldCup": 4 },
        { id: 3, "countryName": "Pakistan", "ranking": 120, "worldCup": 5 },
        { id: 4, "countryName": "Sri lanka", "ranking": 180, "worldCup": 6 },
    ]
    object.push({ countryList: CountryList, worldCup: worldCups })

    return (
        /* value should be exactly {value} */
        <UserContext.Provider value={object}>
            <div>
                <div>
                    <span>Parent -> Child 1 -> Child 2 -> Child 3</span>
                </div>
                <Child1 />
            </div>
        </UserContext.Provider>

    )
}

export default Parent;