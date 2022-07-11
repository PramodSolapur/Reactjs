import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./context";

const Details = () => {
  const { cocktailList } = useGlobalContext();
  const { id } = useParams();
  const cocktail = cocktailList.find((drink) => drink.idDrink === id);
  const {
    strAlcoholic,
    strCategory,
    strDrink,
    strGlass,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = cocktail;
  return (
    <DetailCon>
      <h4>{strDrink}</h4>
      <Container>
        <ImgCon>
          <img src={strDrinkThumb} alt={strDrink} />
        </ImgCon>
        <ContentCon>
          <div>
            <h5>Name</h5>
            <p>: {strDrink}</p>
          </div>
          <div>
            <h5>Category</h5>
            <p>: {strCategory}</p>
          </div>
          <div>
            <h5>Info</h5>
            <p>: {strAlcoholic}</p>
          </div>
          <div>
            <h5>Glass</h5>
            <p>: {strGlass}</p>
          </div>
          <div>
            <h5>Ingredients</h5>
            <p>
              : {strIngredient1} ,{strIngredient2} ,{strIngredient3}
            </p>
          </div>
        </ContentCon>
      </Container>
    </DetailCon>
  );
};

export default Details;

const DetailCon = styled.div`
  width: 70%;
  height: 500px;
  margin: 100px auto 0;
  h4 {
    text-align: center;
    font-size: 25px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;
const ImgCon = styled.div`
  width: 400px;
  height: 400px;
  margin-right: 30px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
const ContentCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    margin: 10px 0px;
    h5 {
      display: flex;
      justify-content: center;
      border-radius: 5px;
      padding: 0px 7px;
      font-size: 18px;
      margin: 0px 10px 0px;
    }
  }
`;
