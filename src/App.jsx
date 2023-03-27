import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

const App = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json()).then(data => setData(data))
  }, [])
  console.log(data[0])
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='grid grid-cols-3 md:grid-cols-4 mt-10 gap-3'>
        <div className='products-container col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          

          {
            data.map((product, i) => <Product key={i} {...product}></Product>)
          }
        </div>
        <div className='product-cart'>
          <h2>cart</h2>

        </div>

      </div>

    </div>
  );
};

export default App;