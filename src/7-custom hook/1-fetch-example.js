import {useFetch} from "./2-useFetch.js";

const url = 'https://reactcourseapi.gorakhjoshi.com/';

const Example = ()=>{
    const {loading , products}=useFetch(url)
    return <div>
        <h3>{loading ? 'loading' : 'product'}</h3>
       
    </div>
}
export default Example