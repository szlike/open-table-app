import React from 'react';
import Table from 'react-bootstrap/Table'

export default class SearchResultComponent extends React.Component {
    constructor(props){
        super(props)
        this.prompt = ''
    }

    componentDidUpdate(){
        this.prompt = 'No search result please try again'
    }

    render() {
        const { refineSearch, refineValue, items} = this.props
        let result;
        if (!Array.isArray(items) || items.length === 0) {
            result = this.prompt
            return (<span>{result}</span>)
        } else {
            result = items.map((e => {
                return (
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.address}</td>
                        <td>{e.price}</td>
                    </tr>
                )
            }))

            return (
                <div className='search-result'>
                    <input placeholder='type more information to refine search' className='input refine' aria-label='refine your search' type='text' name='refineSearch' value={refineValue} onChange={e=>{return refineSearch(e.target.value)}}/> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Restaurant</th>
                                <th>Address</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

