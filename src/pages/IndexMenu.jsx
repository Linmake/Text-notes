import { CardComponent, CardBody } from "../components/card/Card"
import HeaderComponent from '../components/headers/Header';
import { Link, useNavigate } from "react-router-dom"
import '../styles/pages/index/css/IndexMenu.css'
import styled from "styled-components";
import Waves from "../assets/Waves";
import notepad from "../assets/notepad.webp"

const ContainerInicio = styled.div`
width: 100vw;
height: 85%;
background: rgb(251,120,80);
background: linear-gradient(90deg, rgba(251,120,80,1) 0%, rgba(242,179,50,1) 100%);
max-width: 100%;
padding-top: 80px !important;
`

const ContainerCards = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerTitle = styled.div`
  width: 630px;
  height: 550px;
  font-family: "rubik";
  color: #ffffff;
  position: absolute;
  top: 23%;
  left: 17%;
  font-weight: bold;
  cursor: default;
  user-select: none;
`

const ButtonFirst = styled.button`
  width: 38%;
  height: fit-content;
  background-color: white;
  color: black;
  padding: 9px 1px;
  marging 10px 2px;
  font-size: 20px;
  letter-spacing: 0px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 5px 0px;
  border: 1px solid white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 78px;
  &:hover{
    background-color: rgb(247, 247, 247);
  }
`

const MenuInicioPage = () => {
  const navigate = useNavigate()
  const handlerNavigate = () => {
    navigate("proyectos-menu")
  }
  return (
    <>
      <HeaderComponent />
      <ContainerInicio className="container-title">
        <ContainerTitle>
          <h1 className="font">Practicas Notas sencillas</h1>
          <h2 className="subtitles">
            Crea tus ideas, obten rendimiento potente al organizarte
            <ul className="ul">
              <li>Una nota dentro de una carpeta en un proyecto</li>
              <li>Ilimitadas y ordenadas por prioridad</li>
              <li>Retroalimentación visual máxima gracias a la estructura</li>
            </ul>
            <ButtonFirst type="button" onClick={handlerNavigate}>Crear proyecto</ButtonFirst>
          </h2>
        </ContainerTitle>
        <img src={notepad} className="notepadImg" />
        <Waves />
      </ContainerInicio>
      <ContainerCards>
        <Link to={'/proyectos-menu/'} className="link-card" style={{ "marginRight": '13rem' }}>
          <CardComponent>
            <CardBody title="Crear proyecto" icon="proyectosMenuIcon"></CardBody>
          </CardComponent>
        </Link>
        <Link to={'proyecto/'} className="link-card">
          <CardComponent>
            <CardBody title="Crear idea" icon="proyectoIcon"></CardBody>
          </CardComponent>
        </Link>
      </ContainerCards>
    </>
  )
}
export default MenuInicioPage