import { useState } from 'react';

const Inventory = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [inventoryData, setInventoryData] = useState([
    {
      id: 1,
      product: 'Product A',
      quantityOnShelf: 50,
      quantityInOrder: 20,
    },
    {
      id: 2,
      product: 'Product B',
      quantityOnShelf: 30,
      quantityInOrder: 10,
    },
  ]);

  const [formValues, setFormValues] = useState({
    productId: '',
    quantityOnShelf: '',
    quantityInOrder: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedData = inventoryData.map((item) =>
      item.id === parseInt(formValues.productId)
        ? {
            ...item,
            quantityOnShelf: parseInt(formValues.quantityOnShelf),
            quantityInOrder: parseInt(formValues.quantityInOrder),
          }
        : item
    );

    setInventoryData(updatedData);
    setFormValues({ productId: '', quantityOnShelf: '', quantityInOrder: '' });
    setShowUpdateForm(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

      {/* Inventory Table */}
      <table className="w-full border-collapse border border-gray-200 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-2">ID</th>
            <th className="border border-gray-200 px-4 py-2">Product</th>
            <th className="border border-gray-200 px-4 py-2">Quantity on Shelf</th>
            <th className="border border-gray-200 px-4 py-2">Quantity in Order</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-200 px-4 py-2">{item.id}</td>
              <td className="border border-gray-200 px-4 py-2">{item.product}</td>
              <td className="border border-gray-200 px-4 py-2">{item.quantityOnShelf}</td>
              <td className="border border-gray-200 px-4 py-2">{item.quantityInOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Toggle Button */}
      <button
        onClick={() => setShowUpdateForm(!showUpdateForm)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {showUpdateForm ? 'Close Update Form' : 'Update Inventory'}
      </button>

      {/* Inventory Update Form */}
      {showUpdateForm && (
        <form
          onSubmit={handleFormSubmit}
          className="mt-6 bg-white p-4 shadow-md rounded-md"
        >
          <h2 className="text-xl font-semibold mb-4">Update Inventory</h2>

          <div className="mb-4">
            <label htmlFor="productId" className="block font-medium mb-2">
              Product ID
            </label>
            <input
              type="number"
              id="productId"
              name="productId"
              value={formValues.productId}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantityOnShelf" className="block font-medium mb-2">
              Quantity on Shelf
            </label>
            <input
              type="number"
              id="quantityOnShelf"
              name="quantityOnShelf"
              value={formValues.quantityOnShelf}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantityInOrder" className="block font-medium mb-2">
              Quantity in Order
            </label>
            <input
              type="number"
              id="quantityInOrder"
              name="quantityInOrder"
              value={formValues.quantityInOrder}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Inventory;
