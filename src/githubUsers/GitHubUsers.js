import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
    </div>
  );
};

const GitHubUsers = () => {
  const [githubUsers, setGithubUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setGithubUsers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <h1>GitHub Users</h1>
      <div className="github__user__container">
        {githubUsers &&
          githubUsers.map((user) => {
            const { id, login, avatar_url, followers_url, following_url } =
              user;
            return (
              <div className="github__user" key={id}>
                <div className="imgBox">
                  <img src={avatar_url} alt={login} />
                </div>
                <div className="body">
                  <h4>{login}</h4>
                  <div>
                    <Link to={followers_url}>Followers</Link>
                    <Link to={following_url}>Following</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GitHubUsers;
