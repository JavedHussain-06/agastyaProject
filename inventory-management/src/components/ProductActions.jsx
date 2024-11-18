import { productActions, products, stores } from '../data/data';

const ProductActions = () => {
  const getProductName = (productId) => {
    const product = products.find((p) => p.id === productId);
    return product ? product.name : 'Unknown Product';
  };

  const getStoreName = (storeId) => {
    const store = stores.find((s) => s.id === storeId);
    return store ? store.name : 'Unknown Store';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {productActions.map((action) => (
        <div key={action.id} className="p-4 border bg-gray-100">
          <h2 className="font-bold">{getProductName(action.productId)}</h2>
          <p>Store: {getStoreName(action.storeId)}</p>
          <p>Action: {action.action}</p>
          <p>Quantity Changed: {action.quantityChanged}</p>
          <p>Timestamp: {new Date(action.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductActions;
