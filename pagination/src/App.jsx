import { useEffect, useState } from 'react';
import { Post } from './components/Post';
import { Pagination } from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  // Get current posts
  // Get the index of the last post in the page
  const indexOfLastPost = currentPage * postsPerPage;
  // Get the index of the first post in the page
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // extract out the posts beginning at the indexOfFirstPost to the indexOfLastPost
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="p-2 flex flex-col justify-center items-center text-center w-full h-full">
      <h1 className="header text-3xl mx-4 px-4">My blog</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
