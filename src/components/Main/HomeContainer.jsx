import styled from "styled-components"
import Waves from "../../assets/Waves"
import notepad from "../../assets/notepad.webp"
import { useNavigate } from "react-router-dom"
import '../../styles/components/main/main.css'

const ContainerInicio = styled.div`
width: 100%;
height: 85%;
background-color: white;
max-width: 100%;
padding-top: 8% !important;
display: flex;
justify-content: center;
`

const ContainerTitle = styled.div`
width: 42%;
margin-top: 8%;
  display: flex;
  height: 550px;
  font-family: "rubik";
  flex-direction: column;
  color: #212121;
  align-items: center;
  cursor: default;
  user-select: none;
`

const ButtonFirst = styled.button`
  background-color: white;
  color: black;
  width: 11.25rem;
  height: 3.125rem;
  marging 2% 2px;
  font-size: 1.4rem;
  color:rgb(84, 200, 255);
  letter-spacing: 0;
  border: 2px solid rgb(84, 200, 255);
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
  &:hover{
    background-color: #3ac0ff;
    color: white;
    border: 2px solid rgb(84, 200, 255);
  }
`

const Title = styled.h1`
  font-size: 3.7rem;
  &:hover{
    transition: scale(0.7, 0.7) 1s ;
  }
`

const Subtitle = styled.h2`
  margin-top: 2rem;
  font-size: 1.7rem;
`

export default function HomeContainer() {
  const navigate = useNavigate()

  const handlerNavigate = () => {
    navigate("Projects-menu")
  }
  return (
    <ContainerInicio className="container-title">
      <ContainerTitle>
        <Title className="font text">Able Note</Title>
        <Subtitle className="text">Herramienta de notas de texto y proyectos</Subtitle>
          <ButtonFirst type="button" onClick={handlerNavigate}>Crear</ButtonFirst>
      </ContainerTitle>


    </ContainerInicio> 
  )
}   
