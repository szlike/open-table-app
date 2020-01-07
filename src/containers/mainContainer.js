import React from 'react';
import { connect } from 'react-redux'
import { fetchCityIfNeeded } from '../actions/searchByCity'
import SearchBoxesComponent from '../components/searchBoxes'
import SearchResultComponent from '../components/searchResult'

const mapStateToProps = (state) => {;
  return {
    items: state.searchByCity.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByCity: (cityName) => {
    return dispatch(fetchCityIfNeeded(cityName))
  }
})

class OpenTableApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchByCity:{
        data: []
      }
    }
  }

  searchByQuery = (query)=> {
    const {items} = this.props;
    const regex = new RegExp(`${query}`, 'gi');

    let itemsWithWeight = items.map((item)=>{
      let weight = 0;
      if (regex.test(item.name)) weight++
      if (regex.test(item.address)) weight++
      if (regex.test(item.area)) weight++
      
      return Object.assign({}, item, {weight: weight})
    })

    let itemsWithPositiveWeight = itemsWithWeight.filter((item)=>{
      return item.weight > 0
    })

    let itemsWithSortedPositiveWeight = itemsWithPositiveWeight.sort((item1, item2)=>{
      if (item1.weight > item2.weight) return 1
      else if (item1.weight < item2.weight) return -1
      else return 0
    })

    this.setState({
      searchByCity: {
        data: itemsWithSortedPositiveWeight
      }
    }, function () {
      console.log(this.state);
    });

  }

  render(){
    const { 
      searchByCity, 
      cityName, 
      items 
      } = this.props
    let itemsList = 
    (this.state.searchByCity.data.length && this.state.searchByCity.data.length > 0) 
    ? this.state.searchByCity.data : items
    return (
      <div className='main-content'>
        <SearchBoxesComponent 
          searchByCity={searchByCity}
          cityName={cityName}       
        />
    
        <SearchResultComponent 
          items={itemsList}
          refineSearch={this.searchByQuery}
        />
      </div>
      
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenTableApp)