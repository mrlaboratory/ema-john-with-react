import React from 'react';
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ data, product, setData }) => {

    const removeCart = (id) => {
        removeFromDb(id)
        const remaining = data.filter(pd => pd._id != id)
        setData(remaining)
    }



    return (
        <div className='max-w-[571px] flex items-center p-2 border rounded-lg mt-3'>
            <img className='w-[100px] rounded-lg mr-5' src={product.img} alt="" />
            <div className='flex-grow'>
                <h2 className='font-bold text-lg'>{product.name}</h2>
                <h3>Price : <span className='text-[#b6802f]'>{product.price}</span></h3>
                <h3>Quantity : <span className='text-[#b6802f]'>{product.quantity}</span></h3>
                <h3>Shpping charge : <span className='text-[#b6802f]'>{product.quantity}</span></h3>
            </div>
            <button className='btn rounded-full bg-red-200 border-none text-red-500 text-xl' onClick={() => removeCart(product._id)}>
                <FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;