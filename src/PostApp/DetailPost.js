import React, { useContext } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { PostContext } from "./context";

const DetailPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { posts, removePost, editPost } = useContext(PostContext);
  const detailPost = posts.find((post) => post.id === postId);
  const { id, title, description, createdAt } = detailPost;
  const handleRemovePost = (id) => {
    removePost(id);
    navigate("/");
  };
  return (
    <DetailContainer>
      <PostContainer>
        <h3>{title}</h3>
        <h5>{createdAt}</h5>
        <p>{description}</p>
        <ButtonGroup>
          <EditButton onClick={() => editPost(id)}>Edit Post</EditButton>
          <RemoveButton onClick={() => handleRemovePost(id)}>
            Remove Post
          </RemoveButton>
        </ButtonGroup>
      </PostContainer>
    </DetailContainer>
  );
};

export default DetailPost;

const DetailContainer = styled.div`
  margin-top: 80px;
`;

const PostContainer = styled.div`
  padding: 5px 0;
  h3 {
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

const ButtonGroup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
  font-size: 15px;
  &:hover {
    color: white;
    border: 1px solid #111;
  }
`;

const EditButton = styled(Button)`
  &:hover {
    background-color: green;
  }
`;
const RemoveButton = styled(Button)`
  &:hover {
    background-color: red;
  }
`;
