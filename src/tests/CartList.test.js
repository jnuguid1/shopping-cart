import React from 'react';
import { render, screen } from '@testing-library/react';
import CartList from '../components/CartList';
import CartItem from '../components/CartItem';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('../components/CartItem');

const onChangeMock = jest.fn();
const onIncreaseMock = jest.fn();
const onDecreaseMock = jest.fn();
const onRemoveMock = jest.fn();
const closeDrawerMock = jest.fn();

describe('Cart List component', () => {
  it('Display empty cart message if item list is empty', () => {
    render(
      <MemoryRouter>
        <CartList
          items={[]}
          onQuantityChange={onChangeMock}
          onQuantityIncrement={onIncreaseMock}
          onQuantityDecrement={onDecreaseMock}
          onRemoveFromCart={onRemoveMock}
          closeDrawer={closeDrawerMock}
        />
      </MemoryRouter>
    );
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('renders the items array', () => {
    const items = [
      {
        name: 'foo',
        price: 1,
        category: 'gloves',
        image: 'foo.png',
        id: 1,
      },
      {
        name: 'bar',
        price: 2,
        category: 'gloves',
        image: 'bar.png',
        id: 2,
      },
      {
        name: 'faz',
        price: 3,
        category: 'gloves',
        image: 'faz.png',
        id: 3,
      }
    ]
    render(
      <MemoryRouter>
        <CartList
          items={items}
          onQuantityChange={onChangeMock}
          onQuantityIncrement={onIncreaseMock}
          onQuantityDecrement={onDecreaseMock}
          onRemoveFromCart={onRemoveMock}
          closeDrawer={closeDrawerMock}
        />
      </MemoryRouter>
    );
    expect(CartItem.mock.calls).toHaveLength(3);
  })
});