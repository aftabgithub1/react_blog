import { Outlet } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

// layouts
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';



const App = () => {
  return (
      <div className='app'>
        <Header />
          <DataProvider>
            <Nav />
            <Outlet />
          </DataProvider>
        <Footer />
      </div>
  );
} 

export default App;
