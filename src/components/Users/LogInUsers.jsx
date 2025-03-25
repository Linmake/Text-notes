import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  :center ;
  align-items: center;
  font-family: ;
`;
const ContainerDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RegisterForm = styled.form`
  display: flex;
  justify-content: center;
  border: 1px solid #cdcdcd;
  border-radius: calc(1rem * 1 * 0.75);
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  box-sizing: border-box;
  text-align: start !important;
`;

const BttContinue = styled.button`
  width: 22.5rem;
  height: 2.25rem;
  background-color: #000;
  border-style: none;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
`;

const LabelEmail = styled.label`
  font-size: 1.2rem;
  align-self: start;
`;

const InputEmail = styled.input`
  width: 22rem;
  height: 2.25rem;
  margin-top: 0.87rem;
`;

const Spaced = styled.div`
  width: 22rem;
  height: 1rem;
  text-align: center;
  color: #838383;
`;
const GoogleGrid = styled.button`
  width: 22rem;
  height: 2.25rem;
  cursor: pointer;
  font-size: 1rem;
`;

const TitleH1 = styled.h1`
  color: #202020;
`;

const Separator = styled.span`
  width: 100%;
  height: 1px;
  border: 1px solid gray;
`;

export default function LogInUsers() {
  return (
    <Container>
      <ContainerDesc>
        <img src="" alt="efficent notes logo"></img>
        <br />
        <TitleH1>Log in to efficient notes</TitleH1>
      </ContainerDesc>
      <br />
      <RegisterForm>
        <LabelEmail htmlFor="email">Email</LabelEmail>
        <InputEmail id="email" type="email" placeholder="Your email address" />
        <BttContinue type="submit" id="submitButton">
          Continue
        </BttContinue>
        <Spaced>
          <Separator></Separator>
          <div>
            <span>OR</span>
          </div>
          <Separator></Separator>
        </Spaced>
        <GoogleGrid>Continue with Google</GoogleGrid>
      </RegisterForm>
    </Container>
  );
}
