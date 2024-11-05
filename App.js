import {React,useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/Login"; 
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage"; 
import { AuthProvider } from './components/AuthContext';
import './index'
import RazorpayPayment from "./components/RzorpayPayment";


function App() {
  const [cart, setCart] = useState([]);
  return (
    <AuthProvider>
    <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={<Home cart = {cart} setCart = {setCart} />} />
        <Route path="/login" element={<AuthForm />} />
          
        <Route path="/Shop" element={<Shop />} /> 
        <Route path="/About" element= {<About/>}/>
     
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/payment" element={<RazorpayPayment/>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
