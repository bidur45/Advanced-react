 
 import { BrowserRouter, Route, Link } from "react-router-dom";
 
 import Home from"./Home"
 import About from"./About"
 import NavBar from"./NavBar"
 import People from"./People"
 import Person from"./Person"
 import Error from"./Error"



 const ReactRouter =()=> {
return (
    <router>
        <route  path='/'>
        <Home/>
        </route>
        <route path='/'>
        <About/>
        </route>
        <route path='/'>
        <People/>
        </route>
        <route path='/'>
        <Person/>
        </route>
    </router>
)
 }
 export default ReactRouter