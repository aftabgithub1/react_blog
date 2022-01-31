import { postDateFormat } from './functions/myGlobalFunctions';
import { Link } from 'react-router-dom';

const PostSideBar = ({ posts }) => {
  const recentPosts = posts.slice((posts.length - 5), posts.length)
  return (
    <>
      <div className='sidebar'>
        <h3>Ppular Posts</h3>
        <ul className='sidebar-list'>
          {posts.map(post => post.id == 1 && (
            <li key={post.id} className='sidebar-list-item'>
              <Link
                to={`${root}/post/${post.id}/${(post.title.replace(/ /g, '-'))}`}
                className='sidebar-list-link'>
                { post.title }
              </Link>
              <p>{ postDateFormat(post.date) }</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar'>
        <h3>Recent Posts</h3>
        <ul className='sidebar-list'>
          {recentPosts.map(post => (
            <li key={post.id} className='sidebar-list-item'>
              <Link
                to={`${root}/post/${post.id}/${(post.title.replace(/ /g, '-'))}`}
                className='sidebar-list-link'>
                { post.title }
              </Link>
              <p>{ postDateFormat(post.date) }</p>
            </li>
          )).reverse()}
        </ul>
      </div>
    </>
  )
}

export default PostSideBar;