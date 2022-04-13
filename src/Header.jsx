import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { SearchContext } from './SearchContext';

function Header() {
  const { handleSubmit } = useContext(SearchContext);
  
  return (
    <header>
      <h1>
        <NavLink to={'/'}>LOGO</NavLink>
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          name="search-text"
          type="search"
          placeholder="Search for users..."
          required
        />
      </form>

      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Other</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Another</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
