import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/stores" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Stores
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
            Inventory
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
