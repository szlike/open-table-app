import React from 'react';
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions/middleware'
import SearchBoxesComponent from '../components/searchBoxes'
import SearchResultComponent from '../components/searchResult'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.searchByCity.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByCity: (cityName) => {
    return dispatch(fetchPostsIfNeeded(cityName))
  },
  searchByQuery: (query) =>{
    return dispatch(fetchPostsIfNeeded(query))
  }
})

class OpenTableApp extends React.Component {
  render(){
    const { 
      searchByCity, 
      cityName, 
      items, 
      searchByQuery} = this.props

    return (
      <div className='main-content'>
        <SearchBoxesComponent 
          searchByCity={searchByCity}
          cityName={cityName}
          searchByQuery={searchByQuery}
        />
    
        <SearchResultComponent 
          items={items}
        />
      </div>
      
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenTableApp)