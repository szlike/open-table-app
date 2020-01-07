import { combineReducers } from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions/searchByCity'

function searchByCity (state = [], action) {
    switch (action.type) {
      case REQUEST_POSTS:
        return Object.assign({}, state, {
          isFetching: true
        })
      case RECEIVE_POSTS:
        return Object.assign({}, state, {
          isFetching: false,
          data: action.data
        })
      default:
        return state
    }
}


const rootReducer = combineReducers({
  searchByCity
})

export default rootReducer