import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { PostContext } from "./context";
import { Link } from "react-router-dom";

const Home = () => {
  const { filteredPosts } = useContext(PostContext);
  return (
    <Container>
      {filteredPosts &&
        filteredPosts.map(({ id, title, description, createdAt }) => (
          <PostContainer key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
            <h5>{createdAt}</h5>
            <p>{description}</p>
          </PostContainer>
        ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-top: 80px;
`;

const PostContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
  a {
    text-transform: capitalize;
  }
  h5 {
    color: gray;
    font-size: 13px;
  }
  p {
    font-size: 16px;
  }
`;
