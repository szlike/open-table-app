import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({searchByCity:{data:{}}});

test('renders header', () => {
  const { getByText } = render(
    <Provider store={store}>
    <App />
    </Provider>);
  const linkElement = getByText(/Booking/i);
  expect(linkElement).toBeInTheDocument();
});
