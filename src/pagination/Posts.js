import React from "react";

const Posts = ({ loading, posts }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul className="list-group">
      {posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
