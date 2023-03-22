import React, { useState, useEffect } from 'react';

const CartSummary = ({items}) => {
  const TAX = 0.13;
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    const prices = items.map(item => item.price*item.quantity);
    setSubtotal(prices.reduce((sum, price) => sum + price, 0));
  }, [items])

  return (
    <div className='cart-summary'>
      <h3>Order Summary</h3>
      <div className='info-row'>
        <p>Subtotal</p>
        <p>${(Math.round(subtotal*100)/100).toFixed(2)}</p>
      </div>
      <div className='info-row'>
        <p>Delivery Fees</p>
        <p>$0</p>
      </div>
      <div className='info-row'>
        <p>Taxes</p>
        <p>${(Math.round(subtotal*TAX*100)/100).toFixed(2)}</p>
      </div>
      <hr/>
      <div className='info-row'>
        <p>Total</p>
        <p>${(Math.round(subtotal*1.13*100)/100).toFixed(2)}</p>
      </div>
      <button className='action-button' type='button'>Checkout</button>
    </div>
  );
};

export default CartSummary;