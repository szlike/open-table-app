import React from 'react';

export default class SearchByCityComponent extends React.Component {
    render() {
        const { searchByCity, cityName } = this.props
        return (
            
            <div className='search-city'>
                <input className='input search' aria-label='Please enter city name to start booking' placeholder='type city to start searching' type='text' name='city' value={cityName}/> 
                <button className='search-btn city' type='button' onClick={e=>{return searchByCity(e.target.previousElementSibling.value)}}>Search</button>
            </div>
            )
    }
}

