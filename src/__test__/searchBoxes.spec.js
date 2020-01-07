import React from "react"
import { create } from "react-test-renderer"


function dummyFunction (){
  return 'do nothing'
}

const cityName = 'Toronto_test'

describe("SearchBoxes component", () => {
  test("Matches the snapshot", () => {
    const SearchBoxes = create(<searchBoxes />)
    expect(SearchBoxes.toJSON()).toMatchSnapshot()
  })

  test("it pass correct user input when clicked ", () => {
    const SearchBoxes = create(<searchBoxes searchByCity={dummyFunction}
      cityName={cityName}  />)
    const instance = SearchBoxes.root
    const button = instance.findByType("input")
    button.props.onClick()
    expect(instance.state.text).toBe("Toronto_test")
  })
})

