

function searchByQuery(query, state){
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

    return itemsWithSortedPositiveWeight;
    // this.setState({ data: itemsWithSortedPositiveWeight})
}

export function refineSearch(newResultList) {
    return (dispatch, getState) => {
        return dispatch(searchByQuery(newResultList, getState()))
    }
}

export const REFINE_SEARCH = 'REFINE_SEARCH'