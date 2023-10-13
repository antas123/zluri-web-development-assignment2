import React from "react";
import styled from "styled-components";
import { Container, Wrapper } from "./style";

const S1 = () => {
  return (
    <StyledWrapper>
      <Container>
        <Title>
          <h4>Solution Here</h4>
          <p>Answer below this.</p>
        </Title>
        <GridContainer>
          <GridItem>1st</GridItem>
          <GridItem>2nd</GridItem>
          <GridItem>3rd</GridItem>
          <GridItem>4th</GridItem>
        </GridContainer>
      </Container>
    </StyledWrapper>
  );
};

export default S1;

const StyledWrapper = styled(Wrapper)`
  background: #f6f7f9;
`;

const Title = styled.div`
  h4 {
    font-size: 32px;
    font-family: Lexend Medium;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.4px;
    span {
      background: #fae090;
    }
  }
  p {
    font-size: 18px;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }
`;
const QuestionsDiv = styled.div`
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    font-size: 20px;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  
  /* Default grid layout for smaller screens */
  grid-template-columns: auto ;
  grid-template-rows: auto auto;

  @media (min-width: 428px) {
    /* Adjust grid layout for medium-sized screens */
    grid-template-columns: auto auto ;
    grid-template-rows: auto auto;
  }

  @media (min-width: 628px) {
    /* Adjust grid layout for medium-sized screens */
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  }

  @media (min-width: 1024px) {
    /* Adjust grid layout for larger screens (laptops) */
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
  }
`;

const GridItem = styled.div`
  padding: 80px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
`;