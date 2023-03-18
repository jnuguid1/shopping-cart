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
      <h3>Summary</h3>
      <p>Subtotal: ${subtotal}</p>
      <p>Delivery Fees: $0</p>
      <p>Taxes: ${Math.round(subtotal*TAX*100)/100}</p>
      <hr/>
      <p>Total: ${Math.round(subtotal*1.13*100)/100}</p>
    </div>
  );
};

export default CartSummary;