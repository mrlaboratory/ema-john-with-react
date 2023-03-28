import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { addToDb, getShoppingCart } from './utilities/fakedb';

const App = () => {
  const [data, setData] = useState([])
  const [product, setProduct] = useState([])
  const [cartData, setCartData] = useState([])


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json()).then(data => setData(data))
  }, [])

  const shopingCrt = getShoppingCart()
  useEffect(() => {
    const savedCart = []
      for (const id in shopingCrt) {
        const addedProduct = data.find(item => item.id === id)
        if(addedProduct){
          addedProduct.quantity = shopingCrt[id]
          savedCart.push(addedProduct)
        }
    }
    setCartData(savedCart)
  }, [data,product])


  const addToCart = (data) => {
    addToDb(data.id)
    const newdata = [...cartData, data]
    setProduct(newdata)

  }
  // console.log(data[0])
  const toTalPrice = cartData.reduce((p, c) => p + (c.price*c.quantity), 0)
  const tax = toTalPrice*7 / 100
  const grandTotal = toTalPrice - tax
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='grid grid-cols-3 md:grid-cols-4 mt-10 gap-3'>
        <div className='products-container col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>


          {
            data.map((product, i) => <Product key={i} addToCart={addToCart} {...product}></Product>)
          }
        </div>
        <div className='product-cart h-screen sticky top-0 bg-[#FFE0B3]'>
          <h2 className='text-2xl text-center border-b-4 border-black'>Your Shopping list</h2>
          <h3 className='text-2xl text-center'>Total Product : {cartData.reduce((p,c) => p+c.quantity,0)}</h3>
          <h3 className='text-2xl text-center'>Total Price : ${toTalPrice}</h3>
          <h2 className='text-2xl text-center'>Shipping : ${cartData.reduce((p,c) => p+c.shipping,0)}</h2>
          <h2 className='text-2xl text-center'>Tax : $ {tax.toFixed(2)}</h2>

          <h2 className='text-2xl text-center font-bold'>Grand Total : {grandTotal.toFixed(2)}</h2>


        </div>

      </div>

    </div>
  );
};

export default App;