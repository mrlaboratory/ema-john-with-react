import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
            <button onClick={() => addToCart(props)}  className='btn border-none text-black hover:text-white bg-[#FFE0B3] absolute bottom-0 w-[100%] py-2 rounded-lg'>Add to cart 
            
 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
  </button>

        </div>
    );
};

export default Product;