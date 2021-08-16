import { useFetch } from "../7-custom hook/2-useFetch"
import Products from './2-Product'
const url = 'https://reactcourseapi.gorakhjoshi.com/';
const Index = ()=>{
    const { products}=useFetch(url);
    console.log(products);
    return (
        <>
          <h2>Products</h2>
          {products.map((product) => {
            return <Products key={product.id} {...product} />;
          })}
        </>
      );
    };
    


export default Index