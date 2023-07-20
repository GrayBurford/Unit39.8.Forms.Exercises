import {render} from '@testing-library/react';
import Todo from './Todo';

it('renders Todo component without crashing', () => {
    render(<Todo />);
})

it('matches snapshot', () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})