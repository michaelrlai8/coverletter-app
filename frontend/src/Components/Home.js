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
  margin-bottom: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.1),
    0 6px 20px 0 rgba(100, 100, 100, 0.1);
`;

const Title = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const Label = styled.label``;

const Input = styled.input`
  margin-bottom: 30px;
  background-color: #e6e5e5;
  border: none;
  padding: 10px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  outline: none;
  border: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const Home = () => {
  return (
    <Container>
      <Heading>Cover letters made easy</Heading>
      <Description>
        Provide a few basic details and get a cover letter to help land your
        next job.
      </Description>
      <Form action=''>
        <Title>New Cover Letter</Title>
        <Label htmlFor=''>What company are you applying for?</Label>
        <Input type='text' />
        <Label htmlFor=''>What is your current role?</Label>
        <Input type='text' />
        <Label htmlFor=''>
          How many years of experience do you have in the industry?
        </Label>
        <Input type='text' />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Home;
