const Posts = ({ posts }) => {
    return (
      <div>
        <h1>Posts</h1>
        <hr />
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}: 
            <p>"{post.body}"</p>
            </li>;
          })}
        </ul>
      </div>
    );
  };

  export default Posts;