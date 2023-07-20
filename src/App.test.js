import { render, screen } from '@testing-library/react';
import App from './App';



it('Renders App component without crashing', function () {
  render(<App />)
})

it('matches snapshot', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot();
})