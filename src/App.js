
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Shop from './Pages/Shop.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory category="men"/>} />
        <Route path='/womens' element={<ShopCategory category="women"/>} />
        <Route path='/kids' element={<ShopCategory category="kid" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
