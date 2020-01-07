import React from "react";
import { create } from "react-test-renderer";


describe("SearchResult component", () => {
  test("Matches the snapshot", () => {
    const SearchResult = create(<searchResult />);
    expect(SearchResult.toJSON()).toMatchSnapshot();
  });
});

describe("Button component", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
      const component = create(<Button text="SUBSCRIBE TO BASIC" />);
      const instance = component.getInstance();
      expect(instance.state.text).toBe("");
    });
  });
