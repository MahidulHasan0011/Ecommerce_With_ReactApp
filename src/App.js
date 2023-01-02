import Home from "./pages/home"
import {ProductList} from "./pages/ProductList"
import {Product}from "./pages/product"
import {Register}from "./pages/Register"
import {Login}from "./pages/Login"
import {Cart} from "./pages/Cart"
import './App.css';
import {Router} from "./Route"
function App() {
  return (
    <div className="App">
      <Router/>
     {/* <Home/> */}
     {/* <ProductList/> */}
     {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
