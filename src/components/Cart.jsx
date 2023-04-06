import React from 'react';

const Cart = ({cartData, children}) => {
    const toTalPrice = cartData.reduce((p, c) => p + (c.price*c.quantity), 0)
    const tax = toTalPrice*7 / 100
    const grandTotal = toTalPrice - tax
    return (
        <div>
          <h2 className='text-2xl text-center border-b-4 border-black'>{children}</h2>
          <h3 className='text-2xl text-center'>Total Product : {cartData.reduce((p,c) => p+c.quantity,0)}</h3>
          <h3 className='text-2xl text-center'>Total Price : ${toTalPrice}</h3>
          <h2 className='text-2xl text-center'>Shipping : ${cartData.reduce((p,c) => p+c.shipping,0)}</h2>
          <h2 className='text-2xl text-center'>Tax : $ {tax.toFixed(2)}</h2>

          <h2 className='text-2xl text-center font-bold'>Grand Total : {grandTotal.toFixed(2)}</h2>


        </div>
    );
};

export default Cart;