import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { addToDb, getShoppingCart } from './utilities/fakedb';
import Cart from './components/Cart';
import { Link } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([])
  const [product, setProduct] = useState([])
  const [cartData, setCartData] = useState([])



  const [totalProduct, setTotalProcuct] = useState(76)
  const [productPerpage, setProductPerpage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil((totalProduct / productPerpage))
  const totalPages = [...Array(pages).keys()]


  const perPageArray = [5, 10, 20, 30,]
  const handleSetPage = n => {
    setCurrentPage(n)

  }

  const handlePerPageChange = (event) => {
    setCurrentPage(0)
    setProductPerpage(parseInt(event.target.value));
  };


  useEffect(() => {
    fetch(`http://localhost:3000/products2?page=${currentPage}&limit=${productPerpage}`)
    .then(res => res.json())
    .then(d => setData(d))
    .catch(e => console.log(e))



  }, [currentPage,productPerpage])







  // http://localhost:3000/totalProducts 
  // useEffect(() => {
  //   fetch('http://localhost:3000/products')
  //     .then(res => res.json()).then(data => setData(data))
  // }, [])

  const shopingCrt = getShoppingCart()
  useEffect(() => {
    const savedCart = []
    const ids = Object.keys(shopingCrt)
    fetch('http://localhost:3000/productsByIds',{
        method: 'POST',
        headers : {
            'content-type':'application/json'
        },
        body : JSON.stringify(ids)
    })
    .then(res => res.json())
    .then(d => {
      // console.log(d)
      for (const id in shopingCrt) {
        const addedProduct = d.find(item => item._id === id)
        // console.log(addedProduct)
        if (addedProduct) {
          addedProduct.quantity = shopingCrt[id]
          savedCart.push(addedProduct)
        }
      }
      setCartData(savedCart)
    })

   
  }, [data, product])


  const addToCart = (data) => {
    addToDb(data._id)
    const newdata = [...cartData, data]
    setProduct(newdata)

  }
  // console.log(data[0])

  return (
    <div className='container mx-auto'>

      <div className='grid grid-cols-3 md:grid-cols-4 mt-10 gap-3'>
        <div className='products-container col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>


          {
            data.map((product, i) => <Product key={i} addToCart={addToCart} {...product}></Product>)
          }

        </div>

        <div className='product-cart h-screen sticky top-0 bg-[#FFE0B3] rounded-lg p-5'>
          <Cart cartData={cartData} setCartData={setCartData}>
            <Link to="/orders">
              <button className='btn w-full mt-3'> Review Order </button>
            </Link>
          </Cart>
        </div>
      </div>

      <div>
        <h2 className='my-5 text-center font-bold'>Pagination </h2>

        <div className='flex justify-center my-3'>
          <div className="btn-group">
            {
              totalPages.map(num => <button key={num}
                onClick={() => handleSetPage(num)}
                className={`btn  ${currentPage == num ? ' btn-active' : ''}`}>
                {num}</button>)
            }

          </div>
          <select id="per-page-select" onChange={handlePerPageChange} value={productPerpage}>
            {perPageArray.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
};

export default App;