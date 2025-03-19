import { CardComponent, CardBody } from "../components/card/Card"
import HeaderComponent from '../components/headers/Header';
import { Link, useNavigate } from "react-router-dom"
import '../styles/pages/index/IndexMenu.css'
import styled from "styled-components";
import Waves from "../assets/Waves";
import notepad from "../assets/notepad.webp";


const sizes: any = {
  laptop: 1920,
}

const media: any = {
  laptop: `(min-width: ${sizes.laptop})`,
}

const ContainerInicio: any = styled.div`
width: 100%;
height: 85%;
background: linear-gradient(90deg, rgba(251,120,80,1) 0%, rgba(242,179,50,1) 100%);
max-width: 100%;
padding-top: 8% !important;   
`

const ContainerCards:any = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerTitle: any = styled.div`
  width: 42%;
  height: 550px;
  font-family: "rubik";
  color: #ffffff;
  position: absolute;
  top: 22%;
  left: 14%;
  font-weight: bold;
  cursor: default;
  user-select: none;
`

const ButtonFirst: any = styled.button`
  width: 30%;
  height: fit-content;
  background-color: white;
  color: black;
  padding: 1.3% 0.5%;
  marging 2% 2px;
  font-size: 62%;
  letter-spacing: 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 5px 0px;
  border: 1px solid white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 7.8%;
  &:hover{
    background-color: rgb(247, 247, 247);
  }
`

const MenuInicioPage: any = () => {
  
  const navigate = useNavigate()
  
  const handlerNavigate = () => {
    navigate("Proyects-menu")
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
      <ContainerCards id="Crear">
        <Link to={'/Proyects-menu/'} className="link-card" style={{ "marginRight": '13rem' }}>
          <CardComponent>
            <CardBody title="Crear proyecto" icon="proyectosMenuIcon"></CardBody>
          </CardComponent>
        </Link>
        <Link to={'Proyect/'} className="link-card">
          <CardComponent>
            <CardBody title="Crear idea" icon="proyectoIcon"></CardBody>
          </CardComponent>
        </Link>
      </ContainerCards>
    </>
  )
}
export default MenuInicioPage