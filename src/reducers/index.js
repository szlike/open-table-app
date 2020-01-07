import { combineReducers } from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions/searchByCity'
import {
  REFINE_SEARCH
} from '../actions/refineSearch'


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

function refineSearch(state=[], action){
  switch(action.type) {
    case REFINE_SEARCH:
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  searchByCity,
  refineSearch
})

export default rootReducer