import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="mr-2 rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 lg:px-5 lg:py-2.5"
            >
              Get started
            </Link>
          </div>
          <div className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <NavItem to="/" navLabel="Home" />
              <NavItem to="about" navLabel="About" />
              <NavItem to="contact" navLabel="Contact" />
              <NavItem to="github" navLabel="Github" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
