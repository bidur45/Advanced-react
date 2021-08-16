import { useState,useEffect } from "react"


export const useFetch = (url)=>{
    const [loading,setLoading] = useState(true)
    const [products, setproduct] = useState([])
  
  
    useEffect(() => {
        const getProducts = async()=>{
            const response = await fetch(url)
            const products = await response.json()
            setproduct(products);
            setLoading(false);
        } 
     
        getProducts()
       },[url])

     return   {
         loading, products
     }

}