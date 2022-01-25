import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import PostCard from '../components/PostCard';

const Home = () => {
  const { fetchError, isLoading, searchResults } = useContext(DataContext);
  
  return (
    <main>
      <div className="container">
        { isLoading && <p className='loading'>Items Loading...</p>}
        { !isLoading && fetchError && <p className='post-empty'>{fetchError}</p> }
        { !fetchError && !isLoading && (searchResults.length ? searchResults.map(post => <PostCard key={post.id} post={post} /> ) : <p className='post-empty'>No post available!</p>)}
        
      </div>
    </main>
  )
}

export default Home