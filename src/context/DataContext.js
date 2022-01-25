import { createContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { newId, postDateTime, postDateFormat } from '../functions/myGlobalFunctions';
import api from '../api/database';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editPostTitle, setEditPostTitle] = useState('');
  const [editPostBody, setEditPostBody] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  
  
  // -------------------- use effects ---------------------

  // Custom hook applied
  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    let searchHistory = posts.filter(post => (
      post.title.toLowerCase()).includes(search.toLowerCase())
      || (post.date.toLowerCase()).includes(search.toLowerCase())
      || (post.body.toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(searchHistory.reverse());
  }, [posts, search]);




  
  return (
    <DataContext.Provider value={{
      api, fetchError, isLoading,
      newId, postDateTime, postDateFormat,
      Link, useParams, useNavigate,
      useEffect,
      posts, setPosts,
      postTitle, setPostTitle,
      postBody, setPostBody,
      editPostTitle, setEditPostTitle,
      editPostBody, setEditPostBody,
      search, setSearch,
      searchResults, setSearchResults
    }}>
      { children }
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };