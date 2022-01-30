import api from './api/database';
// import { useState, useEffect } from "react";

const Header = () => {
  /*
  const [users, setUsers] = useState([]);
  const userId = 1;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');  
        setUsers(response.data);
      } catch(err) {
        console.log(err.message);
      }
    }

    fetchUsers();
  }, []);
*/

  return (
    <header>
      <div className="container">
        <div className="logo">React Blog</div>
        {/* <div className="admin-name">{ users.map(user => user.id == userId ? user.name : null) }</div> */}
      </div>
    </header>
  )
}

export default Header
