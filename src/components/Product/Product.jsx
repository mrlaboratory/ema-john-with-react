import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
const { img, name, price,seller,ratings, addToCart } = props
    // console.log(functioncheck)
    return (
        <div className='border rounded-lg relative '>
            <img className='w-[100%] h-auto p-3 rounded-lg' src={img} alt="" />
            <div className='px-4 mb-20'>
                <h2 className='text-xl font-bold'>{name}</h2>
                <h3 className='text-md'>Price : ${price}</h3>
                <p className='text-lg'>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Stars</p>

            </div>
            <button onClick={() => addToCart(props)}  className='btn border-none text-black hover:text-white bg-[#FFE0B3] absolute bottom-0 w-[100%] py-2 rounded-lg'>Add to cart  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

  </button>

        </div>
    );
};

export default Product;