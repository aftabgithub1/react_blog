import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import About from './pages/About';
import EditPost from './pages/EditPost';
import Test from './pages/Test';
import MissingPage from './pages/MissingPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="./" element={ <App /> }>
          <Route index element={ <Home /> } />
          <Route path="post" element={ <NewPost /> } />
          <Route path="post/:id/:postTitle" element={ <PostPage /> } />
          <Route path="edit-post/:id" element={ <EditPost /> } />
          <Route path="about" element={<About />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);