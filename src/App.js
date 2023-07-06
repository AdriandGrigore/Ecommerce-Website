import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ScrollToTop from './routes/ScrollToTop';
import { useSelector } from 'react-redux';
import ProductModal from './components/ProductModal';

function App() {
  const { modalStatus } = useSelector(state => state.viewProductModal)

  return (
    <div className="App">
      <ScrollToTop />
      {modalStatus ? <ProductModal /> : null}
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/shop'
          element={<Shop />}
        />
      </Routes>
    </div>
  );
}

export default App;
