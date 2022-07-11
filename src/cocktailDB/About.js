import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutCon>
      <h2>About Cocktails</h2>
      <p>
        A cocktail is an alcoholic mixed drink. Most commonly, cocktails are
        either a combination of spirits, or one or more spirits mixed with other
        ingredients such as tonic water, fruit juice, flavored syrup, or cream.
        Cocktails vary widely across regions of the world, and many websites
        publish both original recipes and their own interpretations of older and
        more famous cocktails.
      </p>
      <p>
        The origins of the word cocktail have been debated. The first written
        mention of cocktail as a beverage appeared in The Farmers Cabinet, 1803
        in the United States. The first definition of a cocktail as an alcoholic
        beverage appeared three years later in The Balance and Columbian
        Repository (Hudson, New York) May 13, 1806. Traditionally, cocktail
        ingredients included spirits, sugar, water and bitters, however, this
        definition evolved throughout the 1800s, to include the addition of a
        liqueur
      </p>
    </AboutCon>
  );
};

export default About;

const AboutCon = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 100px;
  h2 {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  p {
    text-align: justify;
    line-height: 25px;
    font-size: 18px;
  }
`;
