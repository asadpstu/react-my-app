import parent_child from "../constants/parent_child.const";

const initialState = {
    team : "",
    score : ""
}

const Child2Reducer = (state=initialState, action={}) =>{
  switch(action.type){
    case parent_child.CHILD_TWO:
        return {...state, ...action.payload}
        break
    default:
        return state    
  }
}


export default Child2Reducer;