import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const NewPost = () => {
  const { 
    api, useNavigate,
    newId, postDateTime,
    posts, setPosts,
    postTitle, setPostTitle,
    postBody, setPostBody
  } = useContext(DataContext);
  
  const nevigate = useNavigate();

  // -------------------- hsndle submit ---------------------
  const handleSubmit = async () => {
    let id = newId(posts);
    let date = postDateTime();
    let newPostItem = { id, title: postTitle, date, body: postBody };

    try {
      // let response = await api.post('/posts', newPostItem);
      const localStoragePost = JSON.parse(localStorage.getItem('postListLS'));
      let listPosts = [...localStoragePost, newPostItem];
      setPosts(listPosts);
      setPostTitle('');
      setPostBody('');
      nevigate('/');
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <main>
      <div className="container">
        <h1>New Post</h1>
        <form className='new-post-form '
          onSubmit={e => {
            handleSubmit();
            e.preventDefault();
          }}>

          <label htmlFor="newPostTitle">Post Title</label>
          <input
            id="newPostTitle"
            type="text"
            placeholder="Type a post title"
            value={postTitle.toUpperCase()}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />

          <label htmlFor="newPostBody">Dexcription</label>
          <textarea
            id="newPostBody"
            rows="5"
            placeholder="Type some description"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            required
          ></textarea>

          <button
            className='btn-submit'
            type='submit'
          >Submit</button>

        </form>
      </div>
    </main>
  )
}

export default NewPost;