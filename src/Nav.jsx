import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function Nav() {
  const location = useLocation();

  const isProductPage = location.pathname.startsWith('/product');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductOpen(false);
  };

  return (
    <header className="site-header">
      <button
        className="burger-button"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? 'X' : '☰'}
      </button>

      <nav className={isMenuOpen ? 'nav nav-open' : 'nav'}>
        <NavLink to="/" onClick={closeMenu}>
          Main
        </NavLink>

        <div className="desktop-dropdown">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className={
                  isProductPage
                    ? 'nav-dropdown-button product-active'
                    : 'nav-dropdown-button'
                }
                type="button"
              >
                Product
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="dropdown-content" sideOffset={8}>
                <DropdownMenu.Item asChild>
                  <Link className="dropdown-item" to="/product">
                    All Products
                  </Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <Link className="dropdown-item" to="/product/software">
                    Software
                  </Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <Link className="dropdown-item" to="/product/os">
                    Operating Systems
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <div className="mobile-dropdown">
          <button
            className={
              isProductPage
                ? 'nav-dropdown-button product-active'
                : 'nav-dropdown-button'
            }
            type="button"
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            Product
          </button>

          {isProductOpen && (
            <div className="mobile-submenu">
              <Link to="/product" onClick={closeMenu}>
                All Products
              </Link>
              <Link to="/product/software" onClick={closeMenu}>
                Software
              </Link>
              <Link to="/product/os" onClick={closeMenu}>
                Operating Systems
              </Link>
            </div>
          )}
        </div>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;