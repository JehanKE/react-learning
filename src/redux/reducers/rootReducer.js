import { combineReducers } from 'redux'
import appReducer from './reducer'

const rootReducer = combineReducers({
  learnApp: appReducer,
})

export default rootReducer;