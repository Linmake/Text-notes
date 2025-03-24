import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
: center;
align-items: center;

`
const ContainerDesc = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`
const Register = styled.form`
display: flex;
justify-content: center;
border: 1px solid #e5e7eb;
border-radius: calc(1rem * 1 * 0.75);
flex-direction: column;
align-items: center;
`

const Spaced = styled.div`
  
`
const GoogleGrid = styled.div`

`


export default function LogInUsers() {
  return (
    <Container>
      <ContainerDesc>
        <img src='' alt='efficent notes logo' ></img>
        <br/>
        <h1>
          Log in to efficient notes
        </h1>
      </ContainerDesc>
      <br />
      <Register>
        <label htmlFor="email">Email</label>
        <input id='email' type='email' placeholder='Your email address'/>
        <button type='submit' id='submitButton'>Continue</button>
        <Spaced>
          OR
        </Spaced>
        <GoogleGrid>
          Continue with Google
        </GoogleGrid>
      </Register>
    </Container>
  )
}
