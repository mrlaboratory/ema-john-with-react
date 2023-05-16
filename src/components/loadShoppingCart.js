import { getShoppingCart } from "../utilities/fakedb"

const loadShoppingCart = async () => {
    const localStorage = getShoppingCart()
    const ids = Object.keys(localStorage)
    console.log(ids)
    const res = await fetch('http://localhost:3000/productsByIds',{
        method: 'POST',
        headers : {
            'content-type':'application/json'
        },
        body : JSON.stringify(ids)
    })
    const data = await res.json()
    console.log(data)




    const savedData = []
    for (const id in localStorage) {
        const savedProduct = data.find(pd => pd._id == id)
        if (savedProduct) {
            savedProduct.quantity = localStorage[id]
            savedData.push(savedProduct)
        }

    }


    return savedData
}
export default loadShoppingCart