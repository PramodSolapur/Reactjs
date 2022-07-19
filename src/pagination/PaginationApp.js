import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";

const PaginationApp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setLoading(false);
        setPosts(response.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const perPagePosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const checkPageNumber = (number) => {
    if (currentPage >= Math.ceil(posts.length / postsPerPage)) {
      return Math.ceil(posts.length / postsPerPage);
    }
    if (currentPage < 1) {
      return 1;
    }
    return number + 1;
  };

  const nextPage = () => setCurrentPage(checkPageNumber(currentPage));

  const prevPage = () => setCurrentPage(checkPageNumber(currentPage));

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">Pagination Project</h2>
      <Posts posts={perPagePosts} loading={loading} />
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default PaginationApp;
