import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemQuantity from '../components/ItemQuantity';

describe('Item quantity component', () => {
  it('renders quantity of 1 by default', () => {
    const onChangeMock = jest.fn();
    const onIncreaseMock = jest.fn();
    const onDecreaseMock = jest.fn();
    const item = {input: 1};
    render(<ItemQuantity
        item={item}
        onQuantityChange={onChangeMock}
        onQuantityIncrement={onIncreaseMock}
        onQuantityDecrement={onDecreaseMock}
      />);
      expect(screen.getByTestId('quantity').value).toMatch('1');
  })

  // it('quantity increments on increment button click', () => {
  //   const onChangeMock = jest.fn();
  //   render(<ItemQuantity quantity={1} onQuantityIncrement={onChangeMock} />);
  //   const button = screen.getByRole('button', { name: '+' });
  //   userEvent.click(button);
  //   expect(screen.getByTestId('quantity').textContent).toMatch('2');
  // })
})