import parent_child from "../constants/parent_child.const";

const initialState = {
    component : "",
    value : ""
}

const Child1Reducer = (state=initialState, action={}) =>{
  switch(action.type){
    case parent_child.CHILD_ONE:
        return {...state, ...action.payload}
        break
    default:
        return state    
  }
}


export default Child1Reducer;