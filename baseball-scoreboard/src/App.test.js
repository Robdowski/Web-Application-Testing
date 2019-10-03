import React from 'react';
import { render } from "@testing-library/react"
import App from './App';


test('renders without crashing', () => {
  render(<App />, );
});

test('strikes display is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/strikes-display/i)
})

test('balls display is found', () => {
  const { getByText } = render(<App />)

  getByText(/balls/i)
})