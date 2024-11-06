import React from "react";
import Header from "./components/Header";
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const App =()=>{
    return(
       <div className="container">
         <Header />
        <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/about' element ={<About/>} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='/cart' element ={<Cart />} />
        </Routes>
       </div>
    )
}
export default App;