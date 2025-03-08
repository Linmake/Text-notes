import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { NewProyectTab } from "../components/Proyect/NewProyectTab.jsx";
import { PlantillaProyectComponent } from "../components/plantillas/PlantillaProyectComponent.jsx";
import styled from "styled-components";
import "../styles/pages/proyects/global.css";
import axios from "axios";
import { positionSideContext } from "../context/SideProv.jsx";
import { UseData } from "../context/dataContext.jsx";
import { PlantillaNoProyectsComponent } from "../components/plantillas/PlantillaNoProyectsComponent .jsx";

const Container = styled.div`
  width: 52%;
  display: flex;
  box-shadow: 0px 0px 2px #c4c7cc;
  border-radius: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: #FFF;
  padding: 3%;
  padding-top: 2%;
  margin-top: 7%;
`;
const ContainerNoProyects = styled.div`
  width: 52%;
  height: 45%;
  display: flex;
  border: 1px solid #dee0e3;
  box-shadow: 0px 0px 4px #cccc;
  border-radius: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  padding-top: 2%;
  margin-top: 7%;
`;
const ProyectElement = styled.li`
  border-bottom: 1px solid #C4C7C5;
  font-size: 1.3rem;
  list-style: none;
  font-family: "Poppins", 'Lucida Sans', 'Lucida Sans Regular';
  width: 58vw;
  height: 80px;
  padding-top: 0.625rem;
  padding-left: 1.2rem;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;

  &:last-child {
  border: none;
  }
  &:hover {
    background-color:rgba(242, 244, 245, 0.45);
  }
`;
const Ul = styled.ul`
  margin: 0 !important;
  padding-inline-start: 0 !important;
`
const Subtitle = styled.h2`
  font-size: 32px;
  color: #3B3A40;
  font-weight: bold;
  user-select: none;
`
/*
*Trae los Proyectos desde la Base de datos
*/
const getProyects = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/proyect/all`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
/*
*@returns Lista de Proyectos 
*/
const ProyectsMenu = () => {
  const { proyects, setProyects } = useContext(positionSideContext);
  const { setData, setProyect } = UseData()

  const navegacionFolders = useNavigate()

  useEffect(() => {
    const fetchProyects = async () => {
      try {
        const res = await getProyects();
        setProyects(res.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProyects();
  }, [setProyects, setData]);

  /*
  *Abre el Proyecto y envía a la URL 
  */
  const handleClick = (id) => {
    navegacionFolders(`/proyecto/${id}`)
    setData({ key: id })
    const findProyect = proyects.find(proyect => proyect.Id == id)
    setProyect(findProyect)
  };

  return (
    <>
      {proyects.length === 0 ? (
        <PlantillaNoProyectsComponent>
          <ContainerNoProyects>
            <div>  </div>
            <NewProyectTab />
            <Subtitle className="subtitle-noproyects">Sin proyectos</Subtitle>
          </ContainerNoProyects>
        </PlantillaNoProyectsComponent>
      )
        : (
          <PlantillaProyectComponent>
            <Container>
              <NewProyectTab />
              <Ul>
                {proyects.map((proyect, index) => (
                  <ProyectElement key={index} onClick={() => handleClick(proyect.Id)} >
                    {proyect.Title}
                  </ProyectElement>
                ))}
              </Ul>
            </Container>
          </PlantillaProyectComponent>
        )
      }
    </>
  );
};

export default ProyectsMenu;
