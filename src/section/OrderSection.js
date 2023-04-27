import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: var(--dark);
  z-index: 5;

  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: var(--fontlg);
  color: var(--white);
`;
const Input = styled.input`
  outline: none;
  background: var(--grey);
  height: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--offWhite);
  width: clamp(200px, 20rem, 500px);
  &::placeholder{
    color: var(--greyLight);
  }
`

const LongInput = styled.textarea`
  outline: none;
  background: var(--grey);
  height: ${props => props.height}+'rem';
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--offWhite);
  width: clamp(200px, 20rem, 500px);

  &::placeholder{
    color: var(--greyLight);
  }
`
const Form = styled.form `
  display: flex;
  flex-direction: 'row';
  justify-content: 'space-around';
  align-items: 'center';
  height: 60%;
`
const OrderSection = () => {

  return (
    <Section className="panel" id="end">
      <Title>Contact Us</Title>      
      <Form>
        <Input placeholder="Your Name ..." />
        <LongInput resize="none" rows={3} cols={45} height={40} placeholder="Your Response ..." />
      </Form>
    </Section>
  );
};

export default OrderSection;
