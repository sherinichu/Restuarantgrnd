import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Components/Home'
// import Product from './Components/product'
import User from './Components/User'
import { myContext } from './Components/Context/Context'
import { Foods } from './Components/Foods'
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart'
import Booking from './Components/Booking';
import Register from './Components/Register';
import Login from './Components/Login';
import Order from './Components/Order';

function App() {
  const [count, setCount] = useState(0)
  const [food,setFood]=useState(Foods);
  const [wishlist,setWishlist]=useState([]);
  const[cart,setCart]=useState([]);

  return (
    <>
     {/* <BrowserRouter> */}
     <myContext.Provider value={{food,setFood,wishlist,setWishlist,cart,setCart}}>
     <Routes>
      <Route path="home" element={<Home />}></Route>
      <Route path="prd" element={<Product />}></Route>
      <Route path='user' element={<User />}></Route>
      <Route path='wishlist' element={<Wishlist />}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='booking' element={<Booking/>}></Route>
      <Route path='reg' element={<Register/>}></Route>
      <Route path='log' element={<Login/>}></Route>
      <Route path='order' element={<Order/>}></Route>




      </Routes>
      </myContext.Provider>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
