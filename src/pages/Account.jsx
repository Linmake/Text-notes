import React from 'react'
import styled from 'styled-components'
import LogInUsers from '../components/Users/LogInUsers'

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    background-color: #FCFCFC;
    justify-content: center;
    align-items: center;
    margin-right: 50%;
`

export default function AccountPage() {
  return (
    <Container>
        <LogInUsers/> 
    </Container>
  )
}