import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemQuantity from '../components/ItemQuantity';

describe('Item quantity component', () => {
  it('renders 0 quantity', () => {
    const { container } = render(<ItemQuantity />);
    expect(container).toMatchSnapshot();
  })

  it('quantity increments on increment button click', () => {
    const onChangeMock = jest.fn();
    render(<ItemQuantity quantity={1} onQuantityIncrement={onChangeMock} />);
    const button = screen.getByRole('button', { name: '+' });
    userEvent.click(button);
    expect(screen.getByTestId('quantity').textContent).toMatch('2');
  })
})