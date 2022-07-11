import React from "react";
import CocktailList from "./CocktailList";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import SearchBox from "./SearchBox";

const CocktailConatiner = () => {
  const { isLoading } = useGlobalContext();
  return (
    <div className="cocktailContainer">
      <SearchBox />
      {isLoading && <Loading />}
      <CocktailList />
    </div>
  );
};

export default CocktailConatiner;
