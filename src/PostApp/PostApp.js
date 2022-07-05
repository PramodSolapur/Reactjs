import React from "react";
import styled from "styled-components";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import DetailPost from "./DetailPost";
import Post from "./Post";
import { Routes, Route } from "react-router-dom";
import PostProvider from "./context";

const PostApp = () => {
  return (
    <Container>
      <PostProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="about" element={<About />} />
          <Route path="/posts/:postId" element={<DetailPost />} />
        </Routes>
        <Footer />
      </PostProvider>
    </Container>
  );
};

export default PostApp;

const Container = styled.div`
  width: 80%;
  margin: auto;
  min-height: 100vh;
`;
