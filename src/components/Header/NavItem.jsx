import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ to = '/', navLabel }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${isActive ? 'text-orange-700' : 'text-gray-700'} block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
        }
      >
        {navLabel}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  navLabel: PropTypes.string.isRequired,
};

export default NavItem;
