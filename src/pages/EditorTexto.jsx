import { positionSideContext, SideProv } from '@context/SideProv';
import PlantillaEditorComponent from "@components-plantillas/PlantillaEditorComponent";
import SideBar from "@components-sidebar/SideBar";
import QuillEditor from "@components-editor/QuillEditor";
import HeaderEditorComponent from "@components-headers/HeaderEditorComponent";
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UseData } from '@context/dataContext';
import { useNavigate } from 'react-router-dom';

const FilterSelectProyect = styled.div`
z-index: 100;
position: fixed;
top: 0;
background-color: RGBA(5,5,5, 0.5);
left: 0;
width: 100vw;
height: 100vh;
padding: 5rem;
overflow: hidden;
`
const ContainerFilter = styled.div`
position: absolute;
box-shadow: 0px 0px 5px #c4c7cc;
border: 1px solid #dee0e3;
background-color: white;
width: 40%;
height: 65%;
top: 17%;
left: 30%;
padding-top: 50px;
padding-left: 110px;
padding-right: 110px;
padding-bottom: 0px;
`
const Contend = styled.div`
height: 90%;
display: flex;
flex-direction: column;
gap: 8%;

border-radius: 2px;
align-items: center;
padding: 40px;
`
const ContainerProyects = styled.div`
display: flex;
background-color: white;
border: 1px solid #dee0e3;
box-shadow: 0px 0px 2px #c4c7cc;
width: 500px;
min-height: 200px;
max-height: 400px;
top: 30%;
left: 40px;
justify-content: center;
`

const ListProyects = styled.ul`
  margin: 0 !important;
  padding-inline-start: 0 !important;
  display: flex;
  flex-direction: column;
`

const ProyectElement = styled.li`
  border-bottom: 1px solid #C4C7C5;
  font-size: 1.3rem;
  list-style: none;
  font-family: "Poppins", 'Lucida Sans', 'Lucida Sans Regular';
  width: 50vw;
  height: 80px;
  padding: 16px;
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
    background-color: #F2F4F5;
  }
`;

const getProyects = async () => {
  try {
    const res = await axios.get(`http://localhost:4000/proyect/all`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const EditorTexto = () => {
  const { proyects, setProyects } = useContext(positionSideContext);
  const { setData, data, setProyect } = UseData()
  const navigate = useNavigate();
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

  const handlerOpen = (id) => {
    navigate(id)
    setData({ key: id })
    const findProyect = proyects.find(proyect => proyect.Id == id)
    setProyect(findProyect)
  }
  return (
    <PlantillaEditorComponent className="plantilla-body-editor">
      <SideProv>
        {data == undefined ?
          <>
            <FilterSelectProyect>
              <ContainerFilter>
                <Contend>
                  <h1>Abrir un proyecto</h1>
                  <ContainerProyects>
                    <ListProyects>
                      {proyects.map((proyect, index) => (
                        <ProyectElement key={index} onClick={() => handlerOpen(proyect.Id)} >
                          {proyect.Title}
                        </ProyectElement>
                      ))}
                    </ListProyects>
                  </ContainerProyects>
                </Contend>
              </ContainerFilter>
            </FilterSelectProyect>
            <SideBar />
            <HeaderEditorComponent />
            <QuillEditor />
          </>
          : <>
            <SideBar />
            <HeaderEditorComponent />
            <QuillEditor />
          </>
        }
      </SideProv>
    </PlantillaEditorComponent>
  );
};
export default EditorTexto