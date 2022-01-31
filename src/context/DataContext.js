import { createContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { root, newId, postDateTime, postDateFormat } from '../functions/myGlobalFunctions';
import api from '../api/database';
import useLocalStorage from "../hooks/useLocalStorage";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
    // -------------------- static Data ---------------------
  const postsData = [
    {
      "id": 1,
      "title": "My Bithday",
      "date": "January 12, 2022",
      "body": "I just started creating this project on this date, and I found its my birthday"
    },
    {
      "id": 2,
      "title": "What is Lorem Ipsum?",
      "date": "January 13, 2022",
      "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": 3,
      "title": "Why do we use it?",
      "date": "January 14, 2022",
      "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
  ];

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editPostTitle, setEditPostTitle] = useState('');
  const [editPostBody, setEditPostBody] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');



  // -------------------- use effects ---------------------

  // Custom hook applied
  /* 
  useEffect(() => {
    setPosts(data);
  }, [data]);
  */

  // get static data from local storeage
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsList = await JSON.parse(localStorage.getItem('postListLS'))
        || postsData;
        setPosts(postsList);
      } catch(err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchPosts(), 2000);
  }, []);

  // search history
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
      root, newId, postDateTime, postDateFormat,
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