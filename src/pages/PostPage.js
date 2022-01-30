import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import PostSideBar from "../PostSideBar";

const PostPage = () => {
  const { 
    api, postDateFormat,
    posts, setPosts,
    Link, useParams, useNavigate
  } = useContext(DataContext);

  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  let navigate = useNavigate();
  
  // -------------------- hsndle delete ---------------------
  const handleDelete = async (id) => {
    let post = posts.find(post => post.id == id);
    let result = window.confirm(`Are you sure you want to delete ${post.title}?`);

    if(result) {     
      try {
        // await api.delete(`/posts/${id}`);
        let listPosts = posts.filter(post => post.id != id);
        setPosts(listPosts);
        localStorage.setItem('postListLS', JSON.stringify(listPosts));
        navigate('./');
      } catch(err) {
        console.log(err.message)
      }
    }
  } // end hsndle delete

  return (
    <main>
      <div className="container">
        <div className="grid">
          <div className="col-md-8">
            {post &&
              <article>
                <h1 className="post-title">{ post.title }</h1>
                <p className="post-date">{ postDateFormat(post.date) }</p>
                <p className="post-body">{ post.body }</p>
                <Link to={`./edit-post/${post.id}`}>
                  <button className="btn-edit">Edit Post</button>
                </Link>
                <button
                  style={{marginLeft: '10px'}}
                  className="btn-delete"
                  type="button"
                  onClick={() => handleDelete(post.id) }
                >Delete Post</button>
              </article>
            }
            {!post && 
              <>
                <p>Opps! the post not found.</p>
                <Link to="/">Go to home page</Link>
              </>
            }
          </div>
          <div className="col-md-4">
            <PostSideBar posts={posts}/>
          </div>
        </div>

      </div>
    </main>
  )
}

export default PostPage