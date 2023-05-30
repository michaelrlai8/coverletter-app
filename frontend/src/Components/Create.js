import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 60px auto;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.1),
    0 6px 20px 0 rgba(100, 100, 100, 0.1);
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: grey;
`;

const Input = styled.input`
  margin-bottom: 30px;
  background-color: white;
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  outline: none;
  border: 1px solid black;
  padding: 8px;
  border-radius: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const Create = () => {
  return (
    <Container>
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

export default Create;
