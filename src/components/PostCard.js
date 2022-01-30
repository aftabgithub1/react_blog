import { Link } from "react-router-dom";
import { postDateFormat } from "../functions/myGlobalFunctions";

const PostCard = ({ post }) => {
  return (
    <Link
      className="post-card-link"
      to={`./post/${post.id}/${(post.title.replace(/ /g, '-'))}`}
    >
      <article>
        <div className="post-card">
          
          <div className="title">{ post.title }</div>
          
          <div className="body">
            <div className="date">{ postDateFormat(post.date) }</div>
            <p className="text">
              { post.body.length > 100 
                ? post.body 
                : `${post.body.substr(0, 100)}...` }
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard
