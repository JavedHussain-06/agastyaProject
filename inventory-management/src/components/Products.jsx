import { useState } from 'react';
import { products } from '../data/data';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`p-4 border shadow-inner hover:shadow-lg rounded-md transition-shadow duration-300 bg-white `}
            >
              <h2 className="font-bold">{product.name}</h2>
              <p>PLU: {product.plu}</p>
              <p>Stock: {product.quantity}</p>
              {product.quantity < 10 && (
                <p className="text-sm font-bold">Low Stock!</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500">No products found.</p>
      )}
    </div>
  );
};

export default Products;
