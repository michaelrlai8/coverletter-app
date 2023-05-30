import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 80px 0 30px 0;
  font-size: 60px;
  font-weight: 900;
`;

const Description = styled.div`
  text-align: center;
  color: grey;
`;

const Home = () => {
  return (
    <Container>
      <Heading>Cover letters made easy</Heading>
      <Description>
        Provide a few basic details and get a cover letter to help land your
        next job.
      </Description>
    </Container>
  );
};

export default Home;
