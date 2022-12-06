import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientHome from './routes/ClientHome';
import Catalog from './routes/ClientHome/Catalog';
import ProductDeatils from './routes/ClientHome/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
        <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product-details" element={<ProductDeatils />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
