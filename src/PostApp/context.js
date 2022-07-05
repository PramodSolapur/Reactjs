import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const removePost = (id) => {
    setPosts((oldPosts) => oldPosts.filter((post) => post.id !== id));
  };

  const editPost = (id) => {
    const editPost = posts.find((post) => post.id === id);
    setEditId(editPost.id);
    navigate("/post");
  };

  useEffect(() => {
    const newPosts = posts.filter((post) => {
      if (post.title.toLowerCase().includes(text.toLowerCase())) {
        return post;
      }
    });
    setFilteredPosts(newPosts);
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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
