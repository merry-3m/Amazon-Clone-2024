// * useReducer state and action

// ` import action from actionType
import { Type } from "./action.type"

// * * useReducer has two values reducer and initialState

// ` Initialize the state

export const initialState = {
    // # Initially its empty. We use empty array so it'll be easy to count
    basket:[]
}
// ` reducer part of the useReducer

export const reducer = (state,action)=>{
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            return {
               ...state, //` for the initial state
                basket:[...state.basket,action.item] 
                //` keep the initial(thats's why we use spread operator), the added item. 
                //` so for the basket we are giving take the initial state as the first value and add the action.item(added value)
            }
    
        default:
            return state;
    }

}

