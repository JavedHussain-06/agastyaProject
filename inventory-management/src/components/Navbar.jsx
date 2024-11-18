import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-6"> {/* Light grey background */}
      <ul className="flex space-x-4 text-lg font-bold"> {/* Bold text and larger font size */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-extrabold underline' : 'hover:font-semibold'
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stores"
            className={({ isActive }) =>
              isActive ? 'font-extrabold underline' : 'hover:font-semibold'
            }
          >
            Stores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive ? 'font-extrabold underline' : 'hover:font-semibold'
            }
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product-actions"
            className={({ isActive }) =>
              isActive ? 'font-extrabold underline' : 'hover:font-semibold'
            }
          >
           Product Actions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
