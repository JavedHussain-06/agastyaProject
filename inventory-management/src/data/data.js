export const products = [
    { id: 1, plu: 'P001', name: 'Product A', quantity: 50 },
    { id: 2, plu: 'P002', name: 'Product B', quantity: 0 },
    { id: 3, plu: 'P003', name: 'Product C', quantity: 20 },
  ];
  
  export const stores = [
    { id: 1, name: 'Store A', location: 'New York' },
    { id: 2, name: 'Store B', location: 'Los Angeles' },
    { id: 3, name: 'Store C', location: 'Chicago' },
  ];
  
  export const inventory = [
    { id: 1, productId: 1, storeId: 1, quantityOnShelf: 30, quantityInOrder: 20 },
    { id: 2, productId: 2, storeId: 1, quantityOnShelf: 0, quantityInOrder: 50 },
    { id: 3, productId: 3, storeId: 2, quantityOnShelf: 10, quantityInOrder: 10 },
  ];
  
  export const productActions = [
    { id: 1, productId: 1, storeId: 1, action: 'ADD', quantityChanged: 20, timestamp: '2024-11-16T14:00:00Z' },
    { id: 2, productId: 2, storeId: 1, action: 'REMOVE', quantityChanged: 10, timestamp: '2024-11-15T10:00:00Z' },
  ];
  