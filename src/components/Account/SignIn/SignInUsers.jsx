import React from 'react'
import { createGlobalStyle } from 'https://esm.sh/styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/MiFuente.woff2') format('woff2'),
         url('/fonts/MiFuente.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  ::selection{
  background-color: #d7dbfe;
  }
  `

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 35%;
  top: 10%;
  align-items: center;
  ::selection{
  background-color: #d7dbfe;
  }
  gap: 0.5rem;
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
  background-color: #fefefe;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  box-sizing: border-box;
  text-align: start !important;
`;

const BttContinue = styled.button`
  width: 22rem;
  height: 2.25rem;
  background-color: #000;
  border-style: none;
  border-radius: max(calc(6px * 1 * 0.75), 0px);
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
  box-shadow: inset 0 0 0 1px transparent;
  &:hover {
    background-color: #2e2e2e;
  }
`;

const Label = styled.label`
  font-size: 0.875rem;
  align-self: start;
  &:first-child{
  margin-top: 0rem
  }
  margin-top: 2%
`;

const Input = styled.input`
  width: 22rem;
  height: 2.25rem;
  margin-top: 0.87rem;
  white-space: pre-wrap;
  cursor: text;
  color: #202020;
  border: 1px solid #cdcdcd;
  text-indent: calc(calc(12px * 1) - 1px);
  border-radius: max(calc(6px * 1 * 0.75));
  font-size: 1rem;
  &:focus{
  border: 1px solid #979ef7;
  }
  box-shadow: inset 0 0 0 #202020;
  outline-color: #979ef7;
`;

const Spaced = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: center;
  flex-direction: row;
  width: 22rem;
  gap: 14px;
  height: 1rem;
  text-align: center;
  color: #838383;
  font-size: 0.75rem;
  user-select: none;
`;

const Separator = styled.span`
width: 100%;
height: 1px;
background-color: #cdcdcd;
`;

const GoogleGrid = styled.button`
  width: 22rem;
  height: 2.25rem;
  cursor: pointer;
  font-size: 1rem;
  color: #202020;
  border: 1px solid #cdcdcd;
  background-color: white;
  border-radius: max(calc(6px * 1 * 0.75), 0px);
  user-select: none;
`;

const TitleH1 = styled.h1`
  color: #202020;
  font-size: 1.5rem;
`;

const SignInAccount = () => {
 return(
 <Container>
      <ContainerDesc> 
        <TitleH1>Log in to Efficient Notes</TitleH1>
      </ContainerDesc>
      <RegisterForm>
        <Label htmlFor="email">Email</Label>
        <Input autocapitalize={false} spellcheck={false} id="email" type="email" placeholder="Your email address" required autofocus title data-invalid={true} />
        <Label htmlFor="password">Password</Label>
        <Input autocapitalize={false} spellcheck={false} id="password" type="password" placeholder="" required title data-invalid={true} />
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
 )
}

export default SignInAccount