import fetch from 'cross-fetch'
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
  } from './index'


function requestPosts(cityName) {
    return {
        type: REQUEST_POSTS,
        cityName: cityName
    }
}

function trimRestaurantObject(object){
    return {
        name: object.name,
        address: object.address,
        area: object.area,
        price: object.price
    }
}

function receivePosts(cityName, json) {
    return {
      type: RECEIVE_POSTS,
      cityName: cityName,
      data: json.restaurants ? json.restaurants.map(element => {
        return trimRestaurantObject(element)
      }): []
    }
  }

function fetchPosts(parameter) {
    return dispatch => {
      dispatch(requestPosts(parameter))
      return fetch(`http://opentable.herokuapp.com/api/restaurants?city=${parameter}`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(parameter, json)))
    }
}

export function fetchPostsIfNeeded(cityName) {
    return (dispatch, getState) => {
        if (!getState().isFetching){
            return dispatch(fetchPosts(cityName))
        }
    }
}
