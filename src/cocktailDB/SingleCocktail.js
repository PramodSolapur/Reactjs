import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleCocktail = ({
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strGlass,
  idDrink,
}) => {
  return (
    <Cocktail>
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="content">
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link to={`/details/${idDrink}`}>
          <Button>Details</Button>
        </Link>
      </div>
    </Cocktail>
  );
};

export default SingleCocktail;

const Cocktail = styled.div`
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 230px;
    object-position: center;
  }
  .content {
    padding: 15px 0px 10px 20px;
  }
`;
const Button = styled.div`
  display: flex;
  width: fit-content;
  padding: 3px 20px;
  letter-spacing: 1.5px;
  background-color: #74e320;
  cursor: pointer;
`;
