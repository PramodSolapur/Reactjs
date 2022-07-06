import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const FoodItem = ({ restaurantName, rating, imgUrl, location }) => {
  return (
    <Fade bottom>
      <FoodContainer>
        <ImgContainer>
          <img src={imgUrl} alt={restaurantName} />
        </ImgContainer>
        <ContentContainer>
          <TopContent>
            <h5>{restaurantName}</h5>
            <span>{rating}&#9733;</span>
          </TopContent>
          <BottomContent>
            <p>{location.substring(0, 30)}...</p>
            <p>&#8377; 150 for one</p>
          </BottomContent>
        </ContentContainer>
      </FoodContainer>
    </Fade>
  );
};

export default FoodItem;

const FoodContainer = styled.div`
  transition: all 250ms linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  }
`;
const ContentContainer = styled.div``;
const ImgContainer = styled.div`
  width: 90%;
  height: 300px;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const TopContent = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0px;
  span {
    background-color: green;
    color: white;
    padding: 0 3px;
    border-radius: 4px;
  }
`;
const BottomContent = styled(TopContent)`
  p {
    font-size: 16px;
    color: gray;
    margin-bottom: 10px;
  }
`;
