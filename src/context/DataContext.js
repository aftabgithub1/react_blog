import { createContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { newId, postDateTime, postDateFormat } from '../functions/myGlobalFunctions';
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
      "title": "Post Two",
      "date": "January 13, 2022",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a augue dapibus, consequat tortor sed, hendrerit sapien. Morbi aliquet molestie."
    },
    {
      "id": 3,
      "title": "Post Three",
      "date": "January 14, 2022",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a augue dapibus, consequat tortor sed, hendrerit sapien. Morbi aliquet molestie."
    },
    {
      "id": 4,
      "title": "Post Four (edited)",
      "date": "2022-01-30 14:17:38",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a augue dapibus, consequat tortor sed, hendrerit sapien. Morbi aliquet molestie. (Edited)"
    },
    {
      "id": 6,
      "title": "Data Provider",
      "date": "2022-01-25 03:13:45",
      "body": "he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
      "id": 9,
      "title": "Another Post from context",
      "date": "2022-01-25 00:23:40",
      "body": "he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
      "id": 16,
      "title": "Data Provider 5 Ultimate final",
      "date": "2022-01-25 14:08:31",
      "body": "he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
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