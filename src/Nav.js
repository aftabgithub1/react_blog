import { useContext } from 'react';
import { DataContext } from './context/DataContext';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  
  return (
    <nav className='top-nav'>
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
        
        <ul className='top-nav-items'>
          <li className='top-nav-item'>
            <Link className='top-nav-item-link' to="./react_blog">Home</Link>
          </li>
          {/* <li className='top-nav-item'>
            <Link className='top-nav-item-link' to="/post">Post</Link>
          </li> */}
          <li className='top-nav-item'>
            <Link className='top-nav-item-link' to="./react_blog/about">About</Link>
          </li>
          <li className='top-nav-item dropdown'>
            <Link className='top-nav-item-link' to="#">More &darr;</Link>
            <ul className="dropdown-option">
              <li className='dropdown-item'>
                <Link className='dropdown-item-link' to="./react_blog/test">Test Page</Link>
                <Link className='dropdown-item-link' to="./react_blog/no-page">No link here</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav