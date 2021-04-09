import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const cart = props.cart;

  const total = cart.reduce((total, prd) => total + prd.price * prd.quantity, 0);
  // debugger;
  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   const product = cart[i];
  //   total = total + product.price * product.quantity;
  // }

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  }
  else if (total > 15) {
    shipping = 4.99;
  }
  else if (total > 0) {
    shipping = 12.99;
  }

  const tax = (total / 10).toFixed(2);

  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
  }

  return (
    <div>
      <h4 className='text-success'>Order Summary</h4>
      <p>Items ordered: {cart.length}</p>
      <p>Product Price: {formatNumber(total)}</p>
      <p><small>Shipping Cost: {shipping}</small></p>
      <p><small>Tax + VAT: {tax}</small></p>
      <p>Total Price: {grandTotal}</p>
      <Link to='/review'>
        <button className='shop-btn'>Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;