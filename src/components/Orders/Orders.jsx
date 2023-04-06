import React, { useState } from 'react';
import Cart from '../Cart';
import loadShoppingCart from '../loadShoppingCart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const [data,setData] = useState(useLoaderData())
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
          <Cart  cartData={data}>Order Summery</Cart>
        </div>


      </div>

    </div>
  );
};

export default Orders;