import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

// layouts
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

// pages
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import About from './pages/About';
import EditPost from './pages/EditPost';
import Test from './pages/Test';
import MissingPage from './pages/MissingPage';


const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
          <DataProvider>
            <Nav />
            <Routes>
              {/* <Route index element={ <Home /> } /> */}
              <Route path="/" element={ <Home /> } />
              <Route path="/post" element={ <NewPost /> } />
              <Route path="/post/:id/:postTitle" element={ <PostPage /> } />
              <Route path="/edit-post/:id" element={ <EditPost /> } />
              <Route path="/about" element={<About />} />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<MissingPage />} />
            </Routes>
          </DataProvider>
        <Footer />
      </div>
    </Router>
  );
} 

export default App;
