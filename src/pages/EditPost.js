import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const EditPost = () => {
  const {
    api, useEffect, postDateTime,
    posts, setPosts,
    useParams, useNavigate,
    editPostTitle, setEditPostTitle,
    editPostBody, setEditPostBody
  } = useContext(DataContext) ;

  const { id } = useParams();
  const post = posts.find(post => post.id == id);
  const navigate = useNavigate();

  // -------------------- use effect ---------------------
  useEffect(() => {
    setEditPostTitle(post.title);
    setEditPostBody(post.body);
  }, [post, setEditPostTitle, setEditPostBody]); // end use effect

  
  // -------------------- hsndle edit ---------------------
  const handleEdit = async (id) => {
    // let date = postDateTime();
    // let newEditPostItem = { id, title: editPostTitle, date, body: editPostBody };
    try {
      // let response = await api.put(`/posts/${id}`, newEditPostItem);
      // let listPosts = posts.map(post => post.id == id ? response.data : post);
      let listPosts = posts.map(post => post.id == id
        ? {...post, title: editPostTitle, body: editPostBody}
        : post);
      localStorage.setItem('postListLS', JSON.stringify(listPosts));
      setPosts(listPosts);
      setEditPostTitle('');
      setEditPostBody('');
      navigate(`${root}`);
    } catch(err) {
      console.log(err.message);
    }
  } // end handle edit

  return (
    <main>
    <div className="container">
      <h1>Edit Post</h1>
      <form className='new-post-form' onSubmit={e => {
        handleEdit(post.id);
        e.preventDefault();
      }}>

        <label htmlFor="newPostTitle">Post Title</label>
        <input
          id="newPostTitle"
          type="text"
          placeholder="Type a post title"
          value={editPostTitle}
          onChange={e => setEditPostTitle(e.target.value)}
          required
        />

        <label htmlFor="newPostBody">Dexcription</label>
        <textarea
          id="newPostBody"
          rows="5"
          placeholder="Type some description"
          value={editPostBody}
          onChange={e => setEditPostBody(e.target.value)}
          required
        ></textarea>

        <button
          className='btn-submit'
          type='submit'
        >Update</button>

      </form>
    </div>
  </main>
  )
}

export default EditPost
