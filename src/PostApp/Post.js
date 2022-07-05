import React, { useState } from "react";
import styled from "styled-components";
import { PostContext } from "./context";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const {
    posts,
    setPosts,
    title,
    setTitle,
    description,
    setDescription,
    editId,
    isEditing,
    setIsEditing,
  } = useContext(PostContext);
  const dateTime = format(new Date(), "MMMM dd, yyyy pp");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && editId) {
      const newPosts = posts.map((post) => {
        if (post.id === editId) {
          return { ...post, title, description, createdAt: dateTime };
        }
        return post;
      });
      setPosts(newPosts);
      setIsEditing(false);
    } else {
      setPosts([
        ...posts,
        { id: uuidv4(), title, description, createdAt: dateTime },
      ]);
    }
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="title">Description</label>
          <textarea
            placeholder="message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </FormControl>
        <Button type="submit" disabled={!title || !description}>
          Submit
        </Button>
      </form>
    </FormBox>
  );
};

export default Post;

const FormBox = styled.div`
  min-height: 300px;
  width: 70%;
  margin: auto;
  margin-top: 80px;
  form {
    width: 100%;
  }
`;
const FormControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    font-size: 17px;
    letter-spacing: 1.6px;
    padding: 5px 0;
  }
  input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 5px;
    outline: none;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }
`;
const Button = styled.button`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: #61dbfb;
    color: white;
    border: 1px solid #111;
  }
`;
