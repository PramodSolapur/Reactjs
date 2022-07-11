import React, { Fragment } from "react";
import styled from "styled-components";

import { useGlobalContext } from "./context";
import SingleCocktail from "./SingleCocktail";
const CocktailList = () => {
  const { cocktailList } = useGlobalContext();
  return (
    <Fragment>
      <h3 className="cocktail">Cocktails</h3>
      <CocktailGrid>
        {cocktailList.map((cocktail) => (
          <SingleCocktail key={cocktail.idDrink} {...cocktail} />
        ))}
      </CocktailGrid>
    </Fragment>
  );
};

export default CocktailList;

const CocktailGrid = styled.div`
  width: 70%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
