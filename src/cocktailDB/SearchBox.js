import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const SearchBox = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <SearchCon>
      <form>
        <label htmlFor="search">Search Your Fevorite Cocktail</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </SearchCon>
  );
};

export default SearchBox;

const SearchCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  form {
    width: 500px;
    height: 130px;
    margin: auto;
    box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.25);
    label {
      color: black;
      display: block;
      margin: 10px 0px;
      letter-spacing: 2px;
    }
    input {
      width: 100%;
      border: 1px solid #12ccc6;
      border-radius: 2px;
      outline: none;
      color: black;
      padding: 7px;
    }
  }
`;
