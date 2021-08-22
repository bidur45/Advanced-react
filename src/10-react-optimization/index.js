import React, { useState } from 'react'
import {useFetch} from '../7-custom hook/2-useFetch'

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Index = () => {
   const  {products}= useFetch(url)
   const [count, setCount]  = useState(0)
    return (
        <div>
            <h1>Count:{count} </h1>
            <button onClick = {()=> setCount(count + 1)} className='btn'> Counter</button>
            <Biglist products={products} />
            
        </div>
    )
}

const Biglist =React.memo( ({products}) => {
    console.log('Big list is running')
    return(
        <div>
            {products.map((product)=> {
                return (
                    <Singleproducts key = {product.id} {...product} />
                )
            } )
            }
        </div>
    )

})

const Singleproducts = (props)=>{
    console.log('product is running')
    const {fields } = props
    const {price, name} =fields
    return(
        <article className ="product">
            <img src={fields.image[0].url } alt={name}></img>
        <h4>{name}</h4>
        <p>{price}</p>
        </article>
    )
}

export default Index
