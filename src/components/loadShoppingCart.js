import { getShoppingCart } from "../utilities/fakedb"

const loadShoppingCart = async () => {
const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
const data = await res.json() 

const localStorage = getShoppingCart()

const savedData = []
for(const id in localStorage){
const savedProduct = data.find(pd => pd.id == id)
if(savedProduct){
    savedProduct.quantity = localStorage[id]
    savedData.push(savedProduct)
}

}


return savedData
}
export default loadShoppingCart