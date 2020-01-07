import fetch from 'cross-fetch'

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

function fetchPosts(cityName) {
    return dispatch => {
      dispatch(requestPosts(cityName))
      return fetch(`http://opentable.herokuapp.com/api/restaurants?city=${cityName}`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(cityName, json)))
    }
}

export function fetchCityIfNeeded(cityName) {
    return (dispatch, getState) => {
        if (!getState().isFetching){
            return dispatch(fetchPosts(cityName))
        }
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'