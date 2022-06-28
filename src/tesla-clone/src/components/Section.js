import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  const { title, description, leftBtnText, rightBtnText, backgroundImg } =
    props;
  return (
    <Wrapper img={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <ButtonContainer>
        <Fade bottom>
          <Buttongroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Buttongroup>
        </Fade>
        {rightBtnText && <DwonArrow src="/images/downarrow.png" />}
      </ButtonContainer>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${(props) => `url("/images/${props.img}")`} no-repeat center
    center/cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 0;
  scroll-snap-align: start; // full page scroll property
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  align-items: center;
  h1 {
    margin-bottom: 10px;
  }
`;

const Buttongroup = styled.div`
  display: flex;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: #000;
`;

const DwonArrow = styled.img`
  margin-bottom: 10px;
  height: 24px;
  animation: animateDown infinite 1.5s;
`;

const ButtonContainer = styled.div``;
