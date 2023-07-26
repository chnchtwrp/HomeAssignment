import './App.css';
import { Route,Routes } from "react-router-dom";
import Navbar  from "./components/navbar";
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart'
import Checkout from './pages/cart/checkout';
import { ShopContextProvider } from './context/shop-context';

function App() { 
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/cart/checkout" element={<Checkout/>} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
