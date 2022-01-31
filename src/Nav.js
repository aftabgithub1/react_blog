import { useContext } from 'react';
import { DataContext } from './context/DataContext';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  
  return (
    <div className='top-nav'>
      <div className="container">
        <form className="search-form" onChange={(e) => e.preventDefault() }>
          <label htmlFor="search">Search Items</label>
          <input
            id="searchBox"
            type="text"
            placeholder="Search Item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form> 
        
        <nav aria-label='Page Navigation'>
          <ul className='top-nav-items'>
            <li className='top-nav-item'>
              <Link className='top-nav-item-link' to="./">Home</Link>
            </li>
            <li className='top-nav-item dropdown'>
              <span className="menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </span>
              <ul className="dropdown-option">
                <li className='dropdown-item'>
                  <Link className='dropdown-item-link' to="./about">About</Link>
                </li>
                <li className='dropdown-item'>
                  <Link className='dropdown-item-link' to="./test">Website Description</Link>
                </li>
                <li>
                  <Link className='dropdown-item-link' to="./no-page">No link here</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav