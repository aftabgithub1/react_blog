import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const NewPost = () => {
  const { 
    api, useNavigate,
    root, newId, postDateTime,
    posts, setPosts,
    postTitle, setPostTitle,
    postBody, setPostBody
  } = useContext(DataContext);
  
  const nevigate = useNavigate();
  

  // -------------------- hsndle submit ---------------------
  const handleSubmit = async () => {
    try {
      let id = newId(posts);
      let date = postDateTime();
      let newPost = { id, title: postTitle, date, body: postBody }; 
      // let response = await api.post('/posts', newPost);
      let listPosts = [...posts, newPost];
      localStorage.setItem('postListLS', JSON.stringify(listPosts));
      setPosts(listPosts);
      setPostTitle('');
      setPostBody('');
      nevigate(`${root}`);
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
          }  
        }>

          <label htmlFor="newPostTitle">Post Title</label>
          <input
            id="newPostTitle"
            type="text"
            placeholder="Type a post title"
            value={postTitle}
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