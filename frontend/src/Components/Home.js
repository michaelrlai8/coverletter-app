import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Heading = styled.h1`
  text-align: center;
  margin: 120px 0 40px 0;
  font-size: 60px;
  font-weight: 900;
`;

const Description = styled.div`
  text-align: center;
  color: grey;
  margin-bottom: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(Link)`
  border: none;
  padding: 18px 24px;
  text-decoration: none;
  color: white;
  background-color: black;
  border-radius: 5px;
  margin: auto;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const Home = () => {
  return (
    <Container>
      <Heading>Cover letters made easy.</Heading>
      <Description>
        Provide a few basic details and get a cover letter to help land your
        next job.
      </Description>
      <ButtonContainer>
        <Button to='/create'>Get started</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
