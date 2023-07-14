import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ScrollToTop from './routes/ScrollToTop';
import ProductModal from './components/ProductModal';
import Features from './pages/Features';
import CartNotification from './components/CartNotification';

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <ProductModal />
      <CartNotification />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/shop'
          element={<Shop />}
        />
        <Route
          path='/features'
          element={<Features />}
        />
      </Routes>
    </div>
  );
}

export default App;
