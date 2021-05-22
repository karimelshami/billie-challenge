import { combineReducers } from 'redux'
import { commonReducer } from 'modules/common'
import { homeReducer } from 'modules/home'


export default combineReducers({
   common : commonReducer,
   home : homeReducer
})
