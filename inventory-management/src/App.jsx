import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import StorePage from './pages/StorePage';
import InventoryPage from './pages/InventoryPage';
import Navbar from './components/Navbar';
import ProductActionsPage from './pages/ProductActionsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/stores" element={<StorePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/product-actions" element={<ProductActionsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
