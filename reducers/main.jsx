import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

function counter(state = {}, action) {
  switch (action.type) {
    case types.NEXT_ACTION:
      return ++state;
    default:
      return state
  }
}

export default combineReducers({
  counter
})
