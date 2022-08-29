import { initialState } from "../InitialStates/initialState";

export default function appReducer(state = initialState, action) {
    switch(action.type) {
        case 'NAME_CHANGE':
            return {...state, name:action.payload}
        default: return state;
    }
}