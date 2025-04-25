import { CardComponent, CardBody } from "../components/HomeCards/Card"
import HeaderComponent from '../components/Header/Header';
import { Link, useNavigate } from "react-router-dom"
import '../styles/pages/index/IndexMenu.css'
import styled from 'styled-components'
import Waves from "../assets/Waves";
import notepad from "../assets/notepad.webp";

/*
const sizes = {
  laptop: 1920,
}

const media = {
  laptop: `(min-width: ${sizes.laptop})`,
}*/

const ContainerInicio= styled.div`
width: 100%;
height: 85%;
background: linear-gradient(90deg, rgba(251,120,80,1) 0%, rgba(242,179,50,1) 100%);
max-width: 100%;
padding-top: 8% !important;   
`

const ContainerCards= styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContainerTitle = styled.div`
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

const ButtonFirst = styled.button`
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

const IndexMenuPage = () => {
  
  const navigate = useNavigate()
  
  const handlerNavigate = () => {
    navigate("Projects-menu")
  }

  return (
    <>
      <HeaderComponent />
      <ContainerInicio className="container-title">
        <ContainerTitle>
          <h1 className="font">Efficient Notes</h1>
          <h2 className="subtitles">
          Boost ideas, get powerful performance by getting organized
            <ul className="ul">
              <li>A note inside a folder in a project</li>
              <li>Unlimited and sorted by priority</li>
              <li>maximum visual feedback thanks to the structure</li>
            </ul>
            <ButtonFirst type="button" onClick={handlerNavigate}>Create a project</ButtonFirst>
          </h2>
        </ContainerTitle>
        <img src={notepad} className="notepadImg" />
        <Waves />
      </ContainerInicio>
      <ContainerCards id="Create">
        <Link to={'/Projects-menu/'} className="link-card" style={{ "marginRight": '13rem' }}>
          <CardComponent>
            <CardBody title="Create a folder" icon="iconProjectsMenu"></CardBody>
          </CardComponent>
        </Link>
        <Link to={'Project/'} className="link-card">
          <CardComponent>
            <CardBody title="Create a note" icon="iconProject"></CardBody>
          </CardComponent>
        </Link>
      </ContainerCards>
    </> 
  )
}
export default IndexMenuPage