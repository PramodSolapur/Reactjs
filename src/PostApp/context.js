import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();

const getPosts = () => {
  const posts = localStorage.getItem("posts");
  if (posts) {
    return JSON.parse(posts);
  }
  return [];
};

const PostProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(getPosts());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const removePost = (id) => {
    setPosts((oldPosts) => oldPosts.filter((post) => post.id !== id));
  };

  const editPost = (id) => {
    const editPost = posts.find((post) => post.id === id);
    setEditId(editPost.id);
    setTitle(editPost.title);
    setDescription(editPost.description);
    setIsEditing(true);
    navigate("/post");
  };

  useEffect(() => {
    const newPosts = posts.filter((post) => {
      if (post.title.toLowerCase().includes(text.toLowerCase())) {
        return post;
      }
    });
    setFilteredPosts(newPosts);
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [text, posts]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        editPost,
        filteredPosts,
        text,
        setText,
        removePost,
        editId,
        title,
        setTitle,
        description,
        setDescription,
        setIsEditing,
        isEditing,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
