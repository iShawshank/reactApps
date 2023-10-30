import { PropTypes } from 'prop-types';

export const Post = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="list m-2 border border-black rounded-md text-start">
      {posts.map((post) => (
        <li key={post.id} className="list-item border-b-2 p-2 pl-4">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

Post.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};
