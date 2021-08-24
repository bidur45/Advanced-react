import React, { useState, useCallback } from 'react'
import {useFetch} from '../7-custom hook/2-useFetch'

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
   const  {products}= useFetch(url)
    const [count, setCount] = useState(0)
    const [cart, setCart]=useState(0)
    console.log('Index component is running')

    const addToCart = useCallback(() => {
        
        console.log('add to cart is running')
       setCart(cart +1)
    },[cart])
    return (
        <div>
            <h1>Count:{count} </h1>
            <button onClick={() => setCount(count + 1)} className='btn'> Counter</button>
            <h1> Cart:{cart}</h1>

            <Biglist products={products} addToCart={addToCart}/>
            
        </div>
    )
}

const Biglist =React.memo( ({products,addToCart}) => {
    console.log('Big list is running')
    return(
        <div>
            {products.map((product)=> {
                return (
                    <Singleproducts key = {product.id} {...product} addToCart={addToCart} />
                )
            } )
            }
        </div>
    )

})

const Singleproducts = (props)=>{
    console.log('product is running')
    const {fields,addToCart } = props
    const {price, name} =fields
    return(
        <article className ="product">
            <img src={fields.image[0].url } alt={name}></img>
        <h4>{name}</h4>
            <p>{price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </article>
    )
}

export default Index
