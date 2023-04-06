import React, { useState } from 'react';
import Cart from '../Cart';
import loadShoppingCart from '../loadShoppingCart';
import { Link, Route, useLoaderData, useLocation } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Orders = () => {
  const [data,setData] = useState(useLoaderData())
  const loaction = useLocation()
  console.log(loaction)
  console.log(data)
  return (
    <div className='container mx-auto'>

      <div className='grid grid-cols-1 md:grid-cols-3  mt-10 gap-3 p-10 max-w-[976px] mx-auto'>
        <div className='md:col-span-2'>
          {
            data.map(product => <ReviewItem data={data} setData={setData} key={product.id} product={product}></ReviewItem> )
          }

        </div>
        <div className='  bg-[#FFE0B3] rounded-lg p-5'>
          <Cart  cartData={data} setCartData={setData}>
            <Link to="/checkout">
            <button className='btn w-full mt-3'> Proceed to checkout </button>
            </Link>
          </Cart>
          
        </div>


      </div>

    </div>
  );
};

export default Orders;