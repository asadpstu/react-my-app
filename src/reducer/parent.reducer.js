import parent_child from "../constants/parent_child.const";

const initialState = {
    posts : [],
    score_update : ''
}

const ParentReducer = (state=initialState, action={}) =>{
  switch(action.type){
    case parent_child.PARENT_TRIGGER_TEAM:
        const posts = {
            posts : action.payload
        }
        return {...state, ...posts}
        break
    case parent_child.PARENT_TRIGGER_SCORE:
        let score = {
            score_update : action.payload.new_score
        }
        return {...state, ...score}
        break    
    default:
        return state    
  }
}


export default ParentReducer;