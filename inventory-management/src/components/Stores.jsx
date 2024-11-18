import { stores } from '../data/data';

const Stores = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
      {stores.map((store) => (
        <div key={store.id} className="p-4 border  shadow-inner hover:shadow-lg rounded-md  transition-shadow duration-300 bg-white">
          <h2 className="font-bold">{store.name}</h2>
          <p>Location: {store.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Stores;
