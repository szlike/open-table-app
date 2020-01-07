import React from 'react';
import { connect } from 'react-redux'
import { fetchCityIfNeeded } from '../actions/searchByCity'
import { refineSearch } from '../actions/refineSearch'
import SearchBoxesComponent from '../components/searchBoxes'
import SearchResultComponent from '../components/searchResult'

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.searchByCity.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByCity: (cityName) => {
    return dispatch(fetchCityIfNeeded(cityName))
  }, 
  refineSearch: (query) => {
    return dispatch(refineSearch)
  }
})

class OpenTableApp extends React.Component {
  // searchByQuery(query, dispatch){
  //   const {items} = this.props;
  //   const regex = new RegExp(`${query}`, 'gi');


  //   let itemsWithWeight = items.map((item)=>{
  //     let weight = 0;
  //     if (regex.test(item.name)) weight++
  //     if (regex.test(item.address)) weight++
  //     if (regex.test(item.area)) weight++
      
  //     return Object.assign({}, item, {weight: weight})
  //   })

  //   let itemsWithPositiveWeight = itemsWithWeight.filter((item)=>{
  //     return item.weight > 0
  //   })

  //   let itemsWithSortedPositiveWeight = itemsWithPositiveWeight.sort((item1, item2)=>{
  //     if (item1.weight > item2.weight) return 1
  //     else if (item1.weight < item2.weight) return -1
  //     else return 0
  //   })

  //   refineSearch(itemsWithSortedPositiveWeight)
  // }

  render(){
    const { 
      searchByCity, 
      cityName, 
      items 
      } = this.props

    return (
      <div className='main-content'>
        <SearchBoxesComponent 
          searchByCity={searchByCity}
          cityName={cityName}       
        />
    
        <SearchResultComponent 
          items={items}
          refineSearch={refineSearch}
        />
      </div>
      
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenTableApp)