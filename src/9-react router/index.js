 
 import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
 
 import Home from"./Home"
 import About from"./About"
 import NavBar from"./NavBar"
 import People from"./People"
 import Person from"./Person"
 import Error from"./Error"



 const ReactRouter =()=> {
return (
    <Router>
        <NavBar/>
        <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route  path='/about'>
        <About/>
        </Route>
        <Route path='/people'>
        <People/>
        </Route>
        <Route path='/person/:id'>
        <Person/>
        </Route>
        <Route path='/*'>
        <Error/>
        </Route>
        </Switch>
        
    </Router>
    )
 }
 export default ReactRouter