import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js"
import Home from "./components/home/Home.js";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart.js";
import SingleProduct from "./pages/singleProduct/SingleProduct.js";
import Wishlist from "./pages/wishlist/Wishlist.js";
function App() {
  return (
  <div className="App">
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/products/products-info/:id" element={<SingleProduct/>}/>
  </Routes>
  <Footer/>
  </div>)
}

export default App;
